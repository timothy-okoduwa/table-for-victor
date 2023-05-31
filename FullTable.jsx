import React from 'react';
import './FullTable.css'
const tableData = [
  {
    email: 'veronicajade@gmailcom',
    courseName: 'UX Design 101 by Anita Gift',
    dateOfPurchase: '1/10/2023',
    price: '₦12,000',
  },
  {
    email: 'veronicajade@gmailcom',
    courseName: 'UX Design 101 by Anita Gift',
    dateOfPurchase: '1/10/2023',
    price: '₦12,000',
  },
  {
    email: 'veronicajade@gmailcom',
    courseName: 'UX Design 101 by Anita Gift',
    dateOfPurchase: '1/10/2023',
    price: '₦12,000',
  },
  {
    email: 'veronicajade@gmailcom',
    courseName: 'UX Design 101 by Anita Gift',
    dateOfPurchase: '1/10/2023',
    price: '₦12,000',
  },
  {
    email: 'veronicajade@gmailcom',
    courseName: 'UX Design 101 by Anita Gift',
    dateOfPurchase: '1/10/2023',
    price: '₦12,000',
  },
  // Add more objects as needed
];

const FullTable = () => {
  return (
    <div className="mt-5">
      <div>
        <div className="forever container">
          <div className="grew-up">
            <div className="rec">Recent Purchase</div>
            <div className="seeall">See All</div>
          </div>
          <div className="fanta">
            <table className="table">
              <thead className="parana">
                <tr>
                  <th scope="col" className="trtr">
                    Email
                  </th>
                  <th scope="col" className="trtr">
                    Course Name
                  </th>
                  <th scope="col" className="trtr">
                    Date of Purchase
                  </th>
                  <th scope="col" className="trtr">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr className="mt-3" key={index}>
                    <td className="trtr user-name">{item.email}</td>
                    <td className="trtr user-name">{item.courseName}</td>
                    <td className="trtr user-name">{item.dateOfPurchase}</td>
                    <td className="trtr prices">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullTable;
