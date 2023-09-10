import './App.css';
import React,{useEffect} from 'react'
import Nav from './components/nav/Nav';
import { BrowserRouter, Navigate, Route ,Routes} from 'react-router-dom';
import PlanPage from './components/planPage/PlanPage';
import TablePage from './components/tablePage/tablePage';
import { Provider, useDispatch } from 'react-redux';
import store from './redux/redux-store';
import CreateTableForm from './components/createTablePage/CreateTableForm';
import Table from './components/tablePage/tablePageComponents/Table/Table';
import { getTables } from 'redux/tables-reducer';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='app'>
          <Nav />
            <Routes>
              <Route path='/' element={<Navigate to="/plan" />}/>
              <Route path="/plan" element={<PlanPage header="To do list"/>}/>
              <Route path="/tables" element={<TablePage header="Tables"/>}/>
              <Route path="/tables/:tableId?" element={<Table />}/>
              <Route path="/tables/create-table" element={<CreateTableForm header="Create your table"/>}/>
            </Routes>
        </div>
      </Provider>
    </BrowserRouter>
    
  )
}    

export default App



