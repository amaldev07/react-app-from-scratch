import React from 'react';
import { Link, useParams } from 'react-router-dom';


const CompanyDetails = ({ match }) => {
  debugger;
  // const { companyId } = match.params.companyId; // Access the company ID from the URL params
  const { companyId } = useParams();

  // Fetch and display company details based on the companyId

  return (
    <div>
      <h2>Company Details</h2>
      {companyId}
    </div>
  );
};

export default CompanyDetails;
