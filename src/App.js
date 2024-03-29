import React from "react";
import { Admin, Resource } from "react-admin";
import { StudentCreateOrEdit, StudentList, StudentShow } from "./pages/Student";
import { ClassCreateOrEdit, ClassList, ClassShow } from "./pages/Class";
import { subscriberResource } from "./pages/Subscriber";
import { CommentList, CommentShow, CommentCreateOrEdit } from "./pages/Comment";

import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from "react-admin-firebase";
import Theme from "./theme";
import {
  SiteDataList,
  SiteDataCreateOrEdit,
  SiteDataShow,
} from "./pages/SiteData";

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const options = {
  logging: true,
  rootRef: "root_collection/document",
};
const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      theme={Theme}
      // customSagas={[firebaseRealtime]}
    >
      <Resource {...subscriberResource} />
      <Resource
        name="comment"
        list={CommentList}
        show={CommentShow}
        edit={CommentCreateOrEdit}
        create={CommentCreateOrEdit}
      />
      <Resource
        name="students"
        list={StudentList}
        edit={StudentCreateOrEdit}
        create={StudentCreateOrEdit}
        show={StudentShow}
      />
      <Resource
        name="classes"
        list={ClassList}
        edit={ClassCreateOrEdit}
        create={ClassCreateOrEdit}
        show={ClassShow}
      />
      <Resource
        name="siteData"
        list={SiteDataList}
        edit={SiteDataCreateOrEdit}
        create={SiteDataCreateOrEdit}
        show={SiteDataShow}
      />
    </Admin>
  );
}

export default App;
