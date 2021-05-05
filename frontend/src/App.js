import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import Footer from './components/Footer'
import LoadingPage from './components/LoadingPage'
import Home from './components/home/Home'
import Menu from './components/menu/Menu'
import DashboardNewProduct from './components/dashboard/DashboardNewProduct'
import DashboardProducts from './components/dashboard/DashboardProducts'
import DashboardEditProduct from './components/dashboard/DashboardEditProduct'
import DashboardUsers from './components/dashboard/DashboardUsers'
import Header from './components/Header'
import InitSession from './components/auth/Auth'
import ProductsDetails from './components/product_details/ProductDetails'
import Contact  from './components/contact/Contact'
import AppState  from './context/AppState'
import ShooppingCart from './components/shopping_cart/ShoppingCart'
import EditMyProfile from './components/account/EditMyProfile'
import MyProfile from './components/account/MyProfileInfo'
import {
  BrowserRouter as Router,
  Switch,
  Route


} from 'react-router-dom'


function App() {




    return (
      <Router>
        <AppState>
          
          <LoadingPage/>
        <Header/>
  <Switch>
        <Route path = "/" exact>
        <Home></Home>
   
        </Route>
        <Route path = "/menu" exact>
        <Menu
  
         ></Menu>
        </Route>
        <Route path = "/authentication" >
        <InitSession ></InitSession>
        </Route>
        <Route path = "/contact">
          <Contact></Contact>
        </Route>
    <PublicRoute path = "/myAccount/myProfile" component ={MyProfile}/>
              
        <PublicRoute path = "/myAccount/editProfile"
        component={EditMyProfile}/>
        
 
       
          <Route path = "/menu/:productId" component={ ProductsDetails } />
         <PrivateRoute path = "/dashboard/myProducts" component={ DashboardProducts } />
<PrivateRoute path = "/dashboard/newProduct" component={ DashboardNewProduct } />
       <PrivateRoute path =  "/dashboard/editProduct"  component={   DashboardEditProduct } />
              <PrivateRoute path = "/dashboard/users"  component={   DashboardUsers } />
        
            <Route path = "*"  >
              <br></br>
                      <br></br>
                              <br></br>
                                      <br></br>
       <h2>         Not Found 404</h2>
        </Route>
      </Switch>

      <ShooppingCart />
            
        <Footer/>

    </AppState>
      </Router>
      
    );
  }

export default App;