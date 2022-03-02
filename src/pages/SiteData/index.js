import React from "react";
import {
  List,
  Datagrid,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  TextField,
  Show,
  SimpleShowLayout,
  ShowButton,
  ArrayInput,
  SimpleFormIterator,
  ArrayField,
} from "react-admin";

export const SiteDataList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="title" />
      <TextField source="path" />
      <ShowButton label="" />
    </Datagrid>
  </List>
);

export const SiteDataShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="title" label="Title" />
      <TextField source="path" label="Path da Página" />
      <ArrayField source="data.questions" label="Perguntas">
        <Datagrid>
          <TextField source="question" label="Pergunta" />
          <TextField source="answer" label="Resposta" />
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);

const CreateOrEdit = (props) => {
  if (props.id) return <Edit title="Editar SiteData" {...props} />;
  return <Create title="Criar SiteData" {...props} />;
};

export const SiteDataCreateOrEdit = (props) => (
  <CreateOrEdit {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="path" />
      <ArrayInput source="data.questions" label="Perguntas">
        <SimpleFormIterator>
          <TextInput source="question" label="Pergunta" />
          <TextInput source="answer" label="Resposta" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </CreateOrEdit>
);
