<script lang="ts">
  import { ethers } from "ethers";
  import NFT_ABI from "../../abi/NFT_ABI";
  import { amount } from "../../store/amount";
  import { signer } from "../../store/signer";

  let minted: boolean = false;
  let txHash: string = "";
  let message: string = "";
  let ngmaiImages: string[] = [];

  async function mint() {
    const contract = new ethers.Contract(
      import.meta.env.VITE_CONTRACT_URL,
      NFT_ABI,
      $signer
    );
    const tx = await contract.mint(1, {
      value: ethers.utils.parseEther("0.008"),
    });
    txHash = tx.hash;
    minted = true;
  }
</script>

<div class="grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 p-4">
  {#each ngmaiImages as ngmaiImage}
    <img style="height: 80px; width: 80px;" src={ngmaiImage} />
  {/each}
</div>
{#if message}
  <h2 style="color:red;">{message}</h2>
{/if}

{#if $amount}
  there are this many minted: {$amount} out of 888
{/if}
<br />
<div class="btn btn-wide" on:click={async () => await mint()}>LFG</div>
{#if minted}
  <br />
  u did it, nice one m8. u got an ngmai. txHash: {txHash}
{/if}
