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
  EditButton,
  ArrayInput,
  SimpleFormIterator,
  AutocompleteInput,
  ReferenceInput,
  ArrayField,
  ReferenceField,
} from "react-admin";

export const ClassList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="subject" />
      <EditButton label="" />
    </Datagrid>
  </List>
);

export const ClassShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" label="Nome" />
      <TextField source="subject" label="Disciplina" />
      <ArrayField source="students" label="Alunos">
        <Datagrid>
          <ReferenceField label="Nome" source="student" reference="students">
            <TextField source="name" />
          </ReferenceField>
          <ReferenceField
            label="Endereço"
            source="student"
            reference="students"
          >
            <TextField source="address" />
          </ReferenceField>
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);

const CreateOrEdit = (props) => {
  if (props.id) return <Edit title="Editar Aluno" {...props} />;
  return <Create title="Criar Aluno" {...props} />;
};

export const ClassCreateOrEdit = (props) => (
  <CreateOrEdit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="subject" />
      <ArrayInput source="students">
        <SimpleFormIterator>
          <ReferenceInput label="Nome" source="student" reference="students">
            <AutocompleteInput optionText="name" />
          </ReferenceInput>
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </CreateOrEdit>
);
