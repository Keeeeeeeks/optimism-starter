import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { Passport } from "./components";
import { Attestor } from "./components";

export function App() {
  /**
   * Wagmi hook for getting account information
   * @see https://wagmi.sh/docs/hooks/useAccount
   */
  const { isConnected } = useAccount();

  return (
    <>
      <h1>PassaPorta!</h1>

      {/** @see https://www.rainbowkit.com/docs/connect-button */}
      <ConnectButton />

      <h2>Your PassaPorta:</h2>

      {isConnected && (
        <>
          <hr />
          <Attestor />
          <Passport />
          <hr />
        </>
      )}
    </>
  );
}
