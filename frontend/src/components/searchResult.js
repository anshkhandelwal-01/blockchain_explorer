import moment from "moment";
import styles from "../styles/home.module.css";

export default function SearchResults(props) {
  return (
    <section className={styles.searchResults}>
      <p className={styles.amountOfTransactions}>
        Latest 25 from a total of{" "}
        <span className={styles.blueText}>{props.result.result.length}</span>
        transactions
      </p>
      <table className={styles.txnSection}>
        <thead>
          <tr className={styles.txnTitle}>
            <th>Transaction Hash</th>
            <th>Method</th>
            <th>Block</th>
            <th className={styles.blueText}>Age</th>
            <th>From</th>
            <th></th>
            <th>To</th>
            <th>Value</th>
            <th className={styles.blueText}>Txn Fee</th>
          </tr>
        </thead>
        {props.result.result.map((tran) => {
          return (
            <tr className={styles.txn}>
              <td className={styles.blueText}>{tran.hash.slice(0,16)}...</td>
              <td>
                <span className={styles.transfer}>
                  {tran.decoded_call ? tran.decoded_call.label : "Unknown"}
                </span>
              </td>
              <td className={styles.blueText}>{tran.block_number}</td>
              <td>{moment(tran.block_timestamp, "YYYYMMDD").fromNow()}</td>
              <td>
                {tran.from_address.slice(0,8)}...{tran.from_address.slice(34)}
              </td>
              <td>
                <span
                  className={`${
                    tran.from_address.toLowerCase() !==
                    props.result.searchInput.toLowerCase()
                      ? styles.inTxn
                      : styles.outTxn
                  }`}
                >
                  {tran.from_address.toLowerCase() !==
                  props.result.searchInput.toLowerCase()
                    ? "IN"
                    : "OUT"}
                </span>
              </td>
              <td className={styles.blueText}>
                {tran.to_address.slice(0,8)}...{tran.to_address.slice(34)}
              </td>
              <td>{(tran.value / 10 ** 18).toFixed(5)} ETH</td>
              <td>{(tran.gas_price / 10 ** 18).toFixed(12)}</td>
            </tr>
          );
        })}
      </table>
    </section>
  );
}