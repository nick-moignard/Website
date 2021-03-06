import React from 'react';

import './TransactionFees.scss';
import {NavLink} from 'react-router-dom';

const TransactionFees = () => {
  return (
    <section className="TransactionFees">
      <h1 className="page-title">Transaction Fees</h1>
      <p>
        Users are incentivized to maintain bank and validator nodes through the collection of transaction fees. The fee
        amounts and fee structures are set entirely by the owners of the nodes.
      </p>
      <p>
        As banks and validators join the network, they will announce their transaction fees. This is the amount (in
        points) that nodes will charge per block processed. Nodes may charge a fixed transaction fee for all users, or
        offer tier based fees based on trust levels. This is one way in which more trusted user accounts and more
        trusted banks may be rewarded by the network.
      </p>
      <p>
        Users will likely attempt to join the banks that offer the lowest transaction fees. There are also additional
        factors such as server reliability and other services the bank may provide, but the transaction fees will likely
        be a large consideration. When bank fees become too high, users will look for a new bank to join.
      </p>
      <p>
        In the following example, Amy is sending 100 points to Brian. Before the block is even created, Amy's bank is
        aware of the validators transaction fee. The transaction fees of both the bank and the validator will be
        displayed on her user interface. When creating a transaction, Amy will first choose the desired recipient and
        then the amount of points she wishes to send. A very simple UI that Amy may see at that point might look like
        this:
      </p>
      <table>
        <tr>
          <td>Points being sent to Brian</td>
          <td className="light placeholder">Enter the amount of points here...</td>
        </tr>
        <tr>
          <td>Bank fees</td>
          <td className="light">2 points</td>
        </tr>
        <tr>
          <td>Validator fees</td>
          <td className="light">1 point</td>
        </tr>
        <tr>
          <td>Total</td>
          <td />
        </tr>
      </table>
      <p>
        After typing in the amount of points, Amy is able to see the total cost of her transaction and verify that the
        amount is acceptable before signing and sending the block to her bank.
      </p>
      <table>
        <tr>
          <td>Points being sent to Brian</td>
          <td>100</td>
        </tr>
        <tr>
          <td>Bank fees</td>
          <td className="light">2 points</td>
        </tr>
        <tr>
          <td>Validator fees</td>
          <td className="light">1 point</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>103</td>
        </tr>
      </table>
      <p>
        Once the block has been reviewed, signed, and sent to the bank by Amy, the following functions will be
        performed:
      </p>
      <ol className="mb-20">
        <li>Amy's bank will validate that:</li>
        <ol type="a">
          <li>The transaction (Tx) is formatted properly (according to network protocol)</li>
          <li>
            The Tx fees included in Amy's signed block are in agreement with the expected fee structure of the network
          </li>
          <li>
            If any aspect of the block can not be validated, an error will be returned to Amy and the process will not
            continue
          </li>
        </ol>
        <li>
          After initial validation by Amy's bank, the block will be forwarded to the primary validator where it will
          validate:
        </li>
        <ol type="a">
          <li>
            The block and all transactions are formatted properly (necessary to store the data on the blockchain and
            update account balances)
          </li>
          <li>The correct fees to the validator are included</li>
          <li>Amy has enough funds to cover the total cost of all Txs</li>
        </ol>
        <li>
          After the block is confirmed by the validator, the validator will add a confirmation block to the blockchain
          and update the point balances for Amy, Brian, the bank, and the validator (itself).
        </li>
        <li>
          The validator will then send the confirmation block back to Amy's bank where the bank can then notify both
          users of the successful transaction. If the recipient (Brian) is registered at another bank, that bank will
          receive a confirmation block from the confirmation validators.
        </li>
      </ol>
      <p>
        We will cover the exact role of confirmation validators in the{' '}
        <NavLink to="/docs/confirmation-validators">Confirmation Validators</NavLink> section of the documentation.
      </p>
    </section>
  );
};

export default TransactionFees;
