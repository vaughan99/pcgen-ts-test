<script lang="ts">
    import type { CampaignsByName } from '$lib/types';
    import { getCampaignsByName } from '$lib/storage/campaign';
    import * as Empty from '$lib/components/ui/empty';
    import { Button } from '$lib/components/ui/button';
    import * as Dialog from '$lib/components/ui/dialog'
    console.log('CampaignSelector');
</script>

{#await getCampaignsByName()}
    <!-- Too quick to show loading skeleton -->
{:then campaignsByName: CampaignsByName}
    {#if Object.keys(campaignsByName).length === 0}
        <!-- Need to create or import a campaign first -->
        <Empty.Root>
            <Empty.Header>
                <!-- Empty.Media variant="icon">
                <FolderCodeIcon />
                </Empty.Media -->
                <Empty.Title>No Campaigns</Empty.Title>
                <Empty.Description>
                Get started by creating your first campaign.
                </Empty.Description>
            </Empty.Header>
            <Empty.Content>
                <div class="flex gap-2">
                    <Dialog.Root>
                        <Dialog.Trigger>Create Campaign</Dialog.Trigger>
                        <Dialog.Content>
                            <Dialog.Header>
                            <Dialog.Title>Create Campaign</Dialog.Title>
                            <Dialog.Description>
                                Create a named campaign.
                            </Dialog.Description>
                            </Dialog.Header>
                            <div class="mt-4">
                                <p>Some additional content or form fields.</p>
                            </div>
                            <Dialog.Footer>
                                <!-- Optional Footer content -->
                                <Dialog.Close>Close</Dialog.Close>
                            </Dialog.Footer>
                        </Dialog.Content>
                    </Dialog.Root>                    
                    <Button variant="outline">Import Campaign From...</Button>
                </div>
            </Empty.Content>
        </Empty.Root>
    {:else}
        {JSON.stringify(campaignsByName)}
    {/if}
{:catch error}
        {JSON.stringify(error)}
{/await}

