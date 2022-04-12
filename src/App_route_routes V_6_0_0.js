import React, {useState} from 'react'
import Chat, { Message } from 'react-simple-chat'
// import ChatIDI from './chat/cliente/src/componentes/Chat'
import 'react-simple-chat/src/components/index.css'
//----------- Needed for the multipage site -------------------------------------
// import { BrowserRouter, Route, Switch  } from 'react-router-dom'
//Actualizado a la versión 6 de Routes. 'Switch' queda obsoleto y se usa 'Routes'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
//-------------------------------------------------------------------------------
//----------- Needed for internationalization -------------------------------------
import { useTranslation } from 'react-i18next'
//---------------------------------------------------------------------------------
import './css/App.css'
import Header from './Header'

import OrganizationUnit from './api_rest/GetAllSubCategories' //Gets all subCategories from a parent category, 'parentCategory' parameter
// import Emprendedor from './api_rest/GetAllPostByACategory'
// import Empresa from './api_rest/GetAllPostByACategory'
// import Instituto from './api_rest/GetAllPostByACategory'
// import Ayuntamiento from './api_rest/GetAllPostByACategory'

import News from './api_rest/GetPostSet'
import Explora from './api_rest/GetAllPostTags'
import GetAllPostByTag from './api_rest/GetAllPostByTag'
import GetAllPostByTagExcludeCategory from './api_rest/GetAllPostByTagCategoryExcluded'
import GetAllPostByNewsCategory from './api_rest/GetAllPostByNewsCategory'
import GrantsAndSubsidies from './components/GrantsAndSubsidies'
import Transparencia from './api_rest/GetAllPostByACategory'
import Seuelectronica from './api_rest/GetAllPostByACategory'
import Footer from './Footer'
import GetPageByID from './api_rest/GetPageByID'
import Contact from './Contact'
import SearchWebTerm from './api_rest/GetAllSearchResults'
import GetPostBySlug from './api_rest/GetPostBySlug';

function App() {
  // const { tag } = useParams
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.language
  const [messages, setMessages] = useState([
      {
          id: 1,
          text: 'Bon dia,',
          createdAt: '2021-07-21 12:09:12', // optional
          user: {
              id: 2,
              avatar: 'https://link-to-avatar/avatar.jpg' // optional
          }
      }
  ]);

  return (
    <div className="App">
  
      <Header />
      <Chat
            title="IDI"
            minimized={true}
            isTyping={false}
            user={{ id: 1 }}
            messages={messages}
            onSend={message => setMessages([...messages, message])}/>

      <BrowserRouter>
        <Routes>
          <Route path='/searchTerm/:searchTerm' element={<SearchWebTerm/>} />

          <Route path='/transparencia' element={<Transparencia categoryName={t('description.openness')} category="21" />} />
                         
          <Route path='/sede-electronica' element={<Seuelectronica/>} />

          <Route path='/noticias-blog' element={<News totalPages="4" theCategory="22" currentPageLanguage={currentLanguage}/>} />
                         
          <Route path='/que-hace-el-idi' element={<Explora />} />

          <Route path='/getpostbyslug/:theSlug' element={<GetPostBySlug/>} />

          <Route path='/getpostbycategory/:theCategory' component={GetAllPostByNewsCategory} component={<GetAllPostByNewsCategory/>} />

          <Route path='/getpostbytag/:tag' element={<GetAllPostByTag totalPages="4" />} />

          <Route path='/ayudas-subvenciones' element={<GrantsAndSubsidies />} />

          <Route path='/contactar' element={<Contact />} />

          <Route path='/aviso-legal' element={<GetPageByID id="14" />} />

          <Route path='/politica-de-pricacidad' element={<GetPageByID id="3" />} />

          <Route path='/politica-de-cookies' element={<GetPageByID id="17" />} />

          <Route path='/emprenedor/:tag' element={<GetAllPostByTagExcludeCategory totalPages="4" categoryExcluded="2,3,19,20"/>} />

          {/** Selecciono las subcategorías de una categoría padre (OrganizationUnit) [catName='IDI', catID='1'] */}
          <Route path='/' element={<OrganizationUnit theMainCategory='1' />} />
           
          <Route>404 Page</Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
