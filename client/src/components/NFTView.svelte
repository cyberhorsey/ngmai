<script lang="ts">
  import nft from "../store/nft";
  import Nft from "./NFT.svelte";
  import type { NFT } from "../domain/nft";
  import { push } from "svelte-spa-router";

  export let nfts: NFT[];
  export let select: boolean = true;
</script>

<div>
  {#if nfts && nfts.length && !$nft}
    {#if select}
      <h1>Select an NFT</h1>
    {/if}
    <div class="grid sm:grid-cols-4 gap-4 p-4">
      {#each nfts as nft}
        <Nft {nft} {select} />
      {/each}
    </div>
  {:else if select && $nft}
    <div class="text-center">
      <Nft nft={$nft} select={false} />
    </div>
    <div class="text-center">
      <button
        class="btn btn-wide"
        on:click={async () => await push("/cocfight/createorjoin")}
        >Play CoCFight</button
      >
    </div>
  {/if}
</div>
