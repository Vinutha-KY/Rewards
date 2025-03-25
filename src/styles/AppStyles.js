import styled from 'styled-components';


export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PaginationButton = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  &:hover {
    background-color: #2980b9;
  }
`;

export const PaginationText = styled.span`
  font-size: 16px;
  color: #333;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

export const TableHeader = styled.th`
  padding: 10px;
  background-color: #3498db;
  color: white;
  font-weight: bold;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #ecf0f1;
  }
`;

export const TableData = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  margin-bottom: 20px;
`;

export const LoadingMessage = styled.p`
  text-align: center;
  font-size: 18px;
  color: #3498db;
`;

export const ErrorMessage = styled.p`
  text-align: center;
  font-size: 18px;
  color: #e74c3c;
`;

export const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f7f7f7;
  color: #333;
`;

export const Header = styled.h1`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
`;

export const CustomerListContainer = styled.div`
  margin: 20px 0;
`;


export const CustomerItem = styled.li`
  padding: 10px;
  margin: 5px 0;
  background-color: #ecf0f1;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #bdc3c7;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

export const Select = styled.select`
  padding: 8px;
  margin: 5px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;