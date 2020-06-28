import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Show,
  SimpleShowLayout,
  ImageField,
  BooleanField,
} from "react-admin";

export const SubscriberList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="phone" />
      <ImageField source="neighborhood" />
      <ImageField source="city" />
      <BooleanField source="isStudent" />
      <BooleanField source="availableTime" />
      <TextField source="course" />
    </Datagrid>
  </List>
);

export const SubscriberShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="phone" />
      <TextField source="address" />
      <ImageField source="number" />
      <ImageField source="neighborhood" />
      <ImageField source="city" />
      <BooleanField source="isStudent" />
      <BooleanField source="availableTime" />
      <TextField source="course" />
      <TextField source="testimony" />
    </SimpleShowLayout>
  </Show>
);

// const CreateOrEdit = (props) => {
//   if (props.id) return <Edit title="Editar Aluno" {...props} />;
//   return <Create title="Criar Aluno" {...props} />;
// };

// export const SubscriberCreateOrEdit = (props) => (
//   <CreateOrEdit {...props}>
//     <SimpleForm>
//       <TextInput source="name" />
//       <TextInput source="email" />
//       <TextInput source="phone" />
//       <TextInput source="address" />
//       <ReferenceInput label="Turma" source="class" reference="classes">
//         <SelectInput optionText="name" />
//       </ReferenceInput>
//       <FileInput source="image" label="Imagem">
//         <FileField source="src" title="title" />
//       </FileInput>
//     </SimpleForm>
//   </CreateOrEdit>
// );
