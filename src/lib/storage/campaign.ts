import {
  type Campaign,
  CampaignsByNameSpec,
  type CampaignsByName,
} from '$lib/types';
import { filesystem, storage, os } from '@neutralinojs/lib';

const CAMPAIGNS_BY_NAME_KEY = 'campaignsByName';

export const getCampaignsByName: () => Promise<CampaignsByName> = async () => {
  try {
    const campaignsByName: unknown = JSON.parse(
      await storage.getData(CAMPAIGNS_BY_NAME_KEY),
    ) as Record<string, Campaign>;
    return CampaignsByNameSpec.parse(campaignsByName);
  } catch (error: unknown) {
    if (error?.code === 'NE_ST_NOSTKEX') {
      return {};
    } else {
      throw error;
    }
  }
};

export const storeCampaignsByName = async (
  campaignsByName: CampaignsByName,
) => {
  const campaignsStr = JSON.stringify(campaignsByName);
  storage.setData(CAMPAIGNS_BY_NAME_KEY, campaignsStr);
};

export const storeCampaign = async (campaign: Campaign) => {
  const campaignsByName = await getCampaignsByName();
  campaignsByName[campaign.name] = campaign;
  await storeCampaignsByName(campaignsByName);
};

export const createCampaignPath = async (campaign: Campaign) => {
  try {
    await filesystem.getStats(campaign.path);
    console.log(`Campaign directory ${campaign.path} already exists`);
  } catch (error: unknown) {
    if (error?.code === 'NE_FS_NOPATHE') {
      await filesystem.createDirectory(campaign.path);
      console.log(`Created campaign directory ${campaign.path}`);
    } else {
      throw error;
    }
  }
};

export const openCampaignFilesystem = async (
  campaign: Campaign,
  filters?: os.Filter[],
) =>
  os.showOpenDialog(campaign.name, {
    defaultPath: campaign.path,
    filters,
  });

export const deleteCampaign = async (campaign: Campaign) => {
  // Do the riskiest part first. Remove the filesystem representation.
  await filesystem.remove(campaign.path);

  // Remove from the byName store.
  const campaignsByName = await getCampaignsByName();
  delete campaignsByName[campaign.name];
  await storeCampaignsByName(campaignsByName);
};
