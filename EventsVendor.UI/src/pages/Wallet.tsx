import Table from "../components/Table";
import transactions from "../data/transactions";

const Wallet = () => {
  return (
    <div>
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg mt-2">
          <h3 className="text-gray-800 text-3xl font-bold ">
            $ 5000
          </h3>
        </div>
      </div>
      <Table
        columns={["date", "amount", "type", "event"]}
        data={transactions}
      />
    </div>
  );
};

export default Wallet;
