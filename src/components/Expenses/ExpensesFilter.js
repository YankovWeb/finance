import './ExpensesFilter.css';

export const ExpensesFilter = ({ yearUp, selectedYear }) => {
  const options = [
    { value: '', text: '--Chose and option--' },
    { value: '2022', text: '2022' },
    { value: '2021', text: '2021' },
    { value: '2020', text: '2020' },
    { value: '2019', text: '2019' }
  ];

  const slectHandler = (e) => {
    yearUp(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selectedYear} onChange={slectHandler}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
