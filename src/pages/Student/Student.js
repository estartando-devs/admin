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
  FileInput,
  FileField,
  ImageField,
  EditButton,
  ReferenceInput,
  SelectInput,
  ReferenceField,
} from "react-admin";

export const StudentList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <ReferenceField label="Turma" source="class" reference="classes">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="email" />
      <TextField source="phone" />
      <TextField source="address" />
      <EditButton label="" />
    </Datagrid>
  </List>
);

export const StudentShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <ReferenceField label="Turma" source="class" reference="classes">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="email" />
      <TextField source="phone" />
      <TextField source="address" />
      <ImageField source="image.src" />
    </SimpleShowLayout>
  </Show>
);

const CreateOrEdit = (props) => {
  if (props.id) return <Edit title="Editar Aluno" {...props} />;
  return <Create title="Criar Aluno" {...props} />;
};

export const StudentCreateOrEdit = (props) => (
  <CreateOrEdit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <TextInput source="address" />
      <ReferenceInput label="Turma" source="class" reference="classes">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <FileInput source="image" label="Imagem">
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </CreateOrEdit>
);
