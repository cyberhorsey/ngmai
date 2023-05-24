<script lang="ts">
  import ConnectWallet from "../components/buttons/ConnectWallet.svelte";
  import NftView from "../components/NFTView.svelte";
  import type { NFT } from "../domain/nft";
  import { signer } from "../store/signer";
  import fetchNfts from "../utils/fetchNfts";

  let address: string = "";
  let nfts: NFT[] = [];
  async function getNgmaiForAddress() {
    nfts = await fetchNfts($signer, address, import.meta.env.VITE_CONTRACT_URL);
  }
</script>

<div class="max-w-xl">
  <h1 class="mb-5 text-5xl font-bold">ngmai</h1>
  {#if !$signer}
    <p class="mb-5">
      connect wallet first im not paying for rpc for u to search wallets lmao
    </p>
    <ConnectWallet />
  {:else}
    <p class="mb-5">input address into the box</p>
    <input
      bind:value={address}
      class="input mb-2"
      type="text"
      placeholder="0x or some shit idk"
    />
    <button class="btn" on:click={async () => await getNgmaiForAddress()}
      >lfg</button
    >

    {#if nfts}
      <NftView {nfts} select={false} />
    {/if}
  {/if}
</div>
