
import React from 'react'
/* import 'react-simple-chat/src/components/index.css' */
//----------- Needed for the multipage site -------------------------------------
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
//-------------------------------------------------------------------------------
//----------- Needed for internationalization -------------------------------------
import { useTranslation } from 'react-i18next'
//---------------------------------------------------------------------------------
import './css/App.css'
import Header from './Header'

import OrganizationUnit from './api_rest/GetAllSubCategories' //Gets all subCategories from a parent category, 'parentCategory' parameter

import News from './api_rest/GetPostSet'

import QuienesSomos from './api_rest/GetAllQuiSomPosts'
import Explora from './api_rest/GetAllPostTags'
import GetAllPostByTag from './api_rest/GetAllPostByTag'
import GetAllPostByTagExcludeCategory from './api_rest/GetAllPostByTagCategoryExcluded'
import GetAllPostByNewsCategory from './api_rest/GetAllPostByNewsCategory'
import GrantsAndSubsidies from './components/GrantsAndSubsidies'
import Transparencia from './api_rest/GetAllFromTransparency'
import Sedelectronica from './api_rest/GetAllPostByACategory'
import Footer from './Footer'
import GetPageByID from './api_rest/GetPageByID'
import GetProject from './api_rest/GetProject'
import GetTransParenceyDetail from './api_rest/GetTransparencyDetail'
import Contact from './Contact'
import SearchWebTerm from './api_rest/GetAllSearchResults'
import GetPostBySlug from './api_rest/GetPostBySlug'
import SendContactMail from './api_rest/SendContactMail'
function App() {
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.language

  return (
    <div className="App">
  
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/searchTerm/:searchTerm" element= { <SearchWebTerm /> } />         
  
          <Route path="/transparencia" element= { <Transparencia categoryName={t('description.openness')} category="21"/> } />       

          <Route path="/sede-electronica" element= { <Sedelectronica/> } />
          
          <Route path="/noticias-blog" element= {<News totalPages="30" theCategory="22" currentPageLanguage={currentLanguage}/> } />
          
          <Route path='/que-hace-el-idi' element= { <Explora /> } />

          <Route path='/quienes-somos' element= { <QuienesSomos theMainCategory="90" categoryExcluded="1"/> } />
          
          <Route path="/getpostbyslug/:theSlug" element= { <GetPostBySlug /> } />
          
          <Route path="/getpostbycategory/:theCategory" element= { <GetAllPostByNewsCategory /> } />
          
          <Route path="/getpostbytag/:tag" element= { <GetAllPostByTag totalPages="4" /> } />

          <Route path="getproject/:id/:category" element= { <GetProject />} />

          <Route path="gettransparencydetail/:id/:category" element= { <GetTransParenceyDetail />} />
          
          <Route path="/ayudas-subvenciones" element= { <GrantsAndSubsidies /> } />
          
          <Route path="/contactar" element= { <Contact /> } />
          
          <Route path="/aviso-legal" element= { <GetPageByID id="14" /> } />
          
          <Route path="/politica-de-pricacidad" element= { <GetPageByID id="3" /> } />
          
          <Route path="/politica-de-cookies" element= { <GetPageByID id="17" /> } />

          <Route path="/accesibilidad" element= { <GetPageByID id="613" /> } />
          
          <Route path="/emprenedor/:tag" element= { <GetAllPostByTagExcludeCategory totalPages="4" theCategoryExcluded="2,3,19,20,89"/> } />

          <Route path="/send/:messageToSend" element= { <SendContactMail />} />

          <Route path="/" element= { <OrganizationUnit theMainCategory="1" theCategoryExcluded="90" /> } />

          <Route>404 Page</Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
console.log("width: "+window.innerWidth)
export default App;
