import styles from "./ConnectWallet.module.scss";
import Button from "components/Button";
import Wallet from "assets/svg/wallet.svg";

interface IConnectWalletProps {}

const ConnectWallet: React.FC<IConnectWalletProps> = (props) => {
  const handleConnectWallet = () => {
    console.log("connect wallet");
  };
  return (
    <Button
      variant="primary"
      size="md"
      shapeStyle={true}
      onClick={handleConnectWallet}
    >
      <div className={styles.button}>
        <img src={Wallet} width={18} height={18} alt="Connect wallet" />
        Connect wallet
      </div>
    </Button>
  );
};

export default ConnectWallet;
