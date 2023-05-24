<script lang="ts">
  import fetchNfts from "../../utils/fetchNfts";
  import connectMetamask from "../../wallet/connectMetamask";
  import Modal from "./Modal.svelte";
  import { signer } from "../../store/signer";
  import nfts from "../../store/nfts";

  export let isOpen: boolean = false;

  async function connect(fn: () => Promise<void>) {
    await fn();
    isOpen = false;
    const ngmai = await fetchNfts(
      $signer,
      await $signer.getAddress(),
      import.meta.env.VITE_CONTRACT_URL
    );
    nfts.set(ngmai);
  }
</script>

<Modal title="Select Wallet" bind:isOpen>
  <div class="flex flex-col justify-between">
    <button
      class="btn btn-wide"
      on:click={async () => await connect(connectMetamask)}
      >Metamask or Gamestop (if set to default)</button
    >
    <br />
  </div>
</Modal>
