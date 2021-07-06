import styled  from 'styled-components'
import React from 'react'
import {Link} from 'react-router-dom'
import useUserOrdersPage from '../../hooks/useUserOrdersPage'
import {ButtonPrimary} from '../Buttons'
import {SectionTitle} from '../menu/Menu'
import PaginationButtons from '../PaginationButtons'
import OrdersTableSkeletom from '../OrdersTableSkeletom'
import refreshIcone from '../../img/refresh.svg'
import {LoaderSpinner} from '../LoaderSpinner'

const Page = styled.main`
    padding: 65px 5px;
min-height:100vh;
width:100%;
margin: 0 auto;
text-align:center;
background:${props => props.theme.lightYellow};
  &:before{
    display: ${props => props.isLoading ? 'block' : 'none'};
      position:absolute;
      content:" ";
      top:0;
      left:0;
    right:0;
    bottom:0;
    background:#ffffff57;
    z-index:400;
    }
       & >${LoaderSpinner} {
  position: fixed;
    top: 50%;
    left: 50%;
    z-index: 500;
    margin: -60px 0  0 -60px ;

}
`;
export const TableHead = styled.thead`
background-color: ${props => props.theme.black};
color: ${props => props.theme.darckYellow};
& > tr th {
   padding: 10px 0;
       font-family: "Oswald", sans-serif;
       font-size:19px;
}
`;
export const OrdersTable = styled.table`
    width: 100%;
max-width:900px;
margin: 20px auto 30px;
    border-spacing: 10px;
    border-collapse: collapse;
    border: 2px solid ${props => props.theme.black};
        box-shadow: ${props => props.theme.lihgtBoxShadow};
        text-transform: capitalize;
&> tbody{
  background:#fff;
}
& > tbody td span + span{
       margin-right: 5px;
}
& >tbody td {
  padding: 10px 0;
  cursor:pointer;
}
& > tbody tr {
     border-bottom: 1px solid;
}
@media screen and (max-width: 750px){
   max-width: 400px;
  & > ${TableHead}{
  display: none;
    max-width: 400px;
}
& tbody tr {
display: flex;
  flex-direction: column;
          border-bottom: 1px solid rgb(0 0 0 / 45%);
}
& >  tbody tr td {
      display: flex;
    padding: 5px 15px;
    text-align: right;
}
& >  tbody tr td:first-child {
  color:#fff;
  padding: 10px 15px;
background-color: ${props => props.theme.black};
}
& >  tbody tr td:first-child:before {
content:"Nº de Pedido";
    color: ${props => props.theme.darckYellow};
}
& >  tbody tr td:nth-child(3):before {
content:"Dirección";
}
& >  tbody tr td:nth-child(2):before {
content:"Fecha";
}
& >  tbody tr td:nth-child(5):before {
content:"Estado";
}
& >  tbody tr td:nth-child(4):before {
content:"Total";
}
& >  tbody tr td:nth-child(6):before {
content:"Acciones";
}
& >tbody tr td:before{
      margin-right: auto;
    font-family: "Oswald", sans-serif;
    font-size: 16px;
    align-self: center;
padding-rigth:5px;
}
}
`

const CancelOrderButton = styled.button`
padding:  8px 5px;
cursor:pointer;
outline:none;
margin: 5px ;
    border-radius: 10px 5px;
border: none;
font-family: "Oswald", sans-serif;
transition:all 0.5s ;
opacity:${((props) => (props.disabled ? "0.4" : "1"))};
&:hover {
background:${((props) => (props.disabled ? "unset" : "#cdc8c8"))};
}
`
const NotFounMessage = styled.div`
padding: 30px 0;
& >h3{
margin-bottom:40px;
}
@media screen and (max-width:450px){
  font-size: 25px;
}
& > ${ButtonPrimary} {
      padding: 15px 30px;
}
`;
const NotFounIcone = styled.h2`
font-size:50px;
`;
export const RefreshButton = styled.div`
cursor:pointer;
padding:0 10px;
align-items: center;
    border-radius: 5px;
    height: 40px;
      box-shadow: ${props => props.theme.lihgtBoxShadow};
    background:${props => props.theme.black};

    margin: -46px 0 10px auto;
    width: max-content;
display: flex;
    transform: scale(0.7);
    transition: all 0.3s ease;
&:hover{
  transform:scale(0.75);
}
`


export const RefreshIcone = styled.img`
height: 50%;
cursor:pointer;
`;



 export default function UserOrdersPage({setNotification}){

const {seeDetails,handleRefresh,setPage,page,isLoading,maxPage,orders,isFirstRender,deleteOrder} = useUserOrdersPage({setNotification})



  return(

<Page isLoading={isLoading}>

  {isLoading ? <LoaderSpinner /> :  null }

  <SectionTitle light>Mis Pedidos</SectionTitle>

<RefreshButton onClick={ () => handleRefresh()}>
  <RefreshIcone onClick={ () => handleRefresh()}   src={refreshIcone} title='Refrescar Página'/>
  </RefreshButton>

  { ((isLoading) && (isFirstRender) ) && <OrdersTableSkeletom/>}

 {  ( (!isLoading) && (!isFirstRender)  &&  orders?.length === 0)  &&
  <NotFounMessage>
        <NotFounIcone >👩🏻&zwj;🍳</NotFounIcone>
        <h3>Ningún pedido realizado, tienes hambre?</h3>

      <ButtonPrimary small as={Link} to="/menu">Ver Menú</ButtonPrimary>
    </NotFounMessage>}


  {(orders?.length !== 0)  &&
<OrdersTable>
  <TableHead>
    <tr>
    <th>Nº de Pedido</th>
         <th>Fecha</th>
        <th>Dirección</th>
            <th>Total</th>
            <th>Estado</th>
            <th >Acciones</th>
            </tr>
  </TableHead>
  <tbody>
    {orders?.map(order =>

    <tr key={order?._id} onClick={(e) => seeDetails(order._id)}>
    <td>{order?.orderID}</td>
        <td>

          <span>{new Date(order?.states[0].date).toLocaleString()?.split(" ")[0]}</span>
          <br></br>
            <span>{new Date(order?.states[0].date).toLocaleString()?.split(" ")[1]}</span>
</td>
        <td>{order.client[0].address}</td>
        <td>${order?.total}</td>
        <td> <b>{[...order?.states].reverse().find(state => state.confirmed ===true).name}</b></td>

         <td  >
                    <CancelOrderButton disabled={(order?.states[1].confirmed === true) ? true : false} onClick={ (e) => deleteOrder(e,order._id)}>
Cancelar Pedido
                    </CancelOrderButton>
           </td>
        </tr>

    )}

  </tbody>

</OrdersTable>

}

<PaginationButtons setPage={setPage} page={page} maxPage={maxPage} />
</Page>
  )
}