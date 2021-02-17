import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Show,
  SimpleShowLayout,
  BooleanField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  ReferenceField,
} from "react-admin";

export const CommentList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <ReferenceField
        label="Subscriber"
        source="subscriber_id"
        reference="subscriber"
      >
        <TextField source="email" />
      </ReferenceField>
      <TextField source="author" />
      <TextField source="comment" />
    </Datagrid>
  </List>
);

export const CommentShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="course" />
      <TextField source="fullName" />
      <TextField source="email" />
      <TextField source="phone" />
      <TextField source="address" />
      <TextField source="neighborhood" />
      <TextField source="city" />
      <BooleanField source="isStudent" />
      <BooleanField source="availableTime" />
      <BooleanField source="approved" />
      <BooleanField source="hackathon" />
      <TextField source="testimony" />
      <TextField source="observation" />
    </SimpleShowLayout>
  </Show>
);

const CreateOrEdit = (props) => {
  if (props.id) return <Edit title="Edit Comment" {...props} />;
  return <Create title="Create Comment" {...props} />;
};

export const CommentCreateOrEdit = (props) => (
  <CreateOrEdit {...props}>
    <SimpleForm>
      <TextInput source="author" />
      <ReferenceInput
        label="Subscriber"
        source="subscriber_id"
        reference="subscriber"
        filterToQuery={(searchText) => ({ email: searchText })}
      >
        <AutocompleteInput optionText="email" />
      </ReferenceInput>
      <TextInput source="comment" multiline />
    </SimpleForm>
  </CreateOrEdit>
);
