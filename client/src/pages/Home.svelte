<script lang="ts">
  import { push } from "svelte-spa-router";
  import ConnectWallet from "../components/buttons/ConnectWallet.svelte";
  import NftView from "../components/NFTView.svelte";
  import { signer } from "../store/signer";
  import nfts from "../store/nfts";
  import Mint from "../components/buttons/Mint.svelte";
</script>

<div class="max-w-xl">
  <h1 class="mb-5 text-5xl font-bold">ngmAI</h1>
  <p class="mb-5">ready?</p>
  {#if !$signer}
    <ConnectWallet />
    <br />
    or
    <br />
    <button class="btn" on:click={() => push("/viewForAddress")}
      >view ngmAI by address</button
    >
  {:else}
    <Mint />
  {/if}
</div>
