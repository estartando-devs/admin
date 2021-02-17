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
  BooleanInput,
  ArrayInput,
  SimpleFormIterator,
  Filter,
  ReferenceManyField,
} from "react-admin";

const SubscriberFilter = (props) => (
  <Filter {...props}>
    <TextInput source="fullName" label="Full Name" alwaysOn />
    <TextInput source="email" label="Email" alwaysOn />
    <TextInput source="course" label="Course" alwaysOn />
  </Filter>
);

export const SubscriberList = (props) => (
  <List {...props} filters={<SubscriberFilter />}>
    <Datagrid rowClick="edit">
      <TextField source="fullName" />
      <TextField source="email" />
      <BooleanField source="approved" />
      <BooleanField source="hackathon" />
      {/* <TextField source="phone" /> */}
      {/* <TextField source="neighborhood" /> */}
      <TextField source="city" />
      {/* <BooleanField source="isStudent" /> */}
      {/* <BooleanField source="availableTime" /> */}
      <TextField source="course" />
    </Datagrid>
  </List>
);

export const SubscriberShow = (props) => (
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
  if (props.id) return <Edit title="Edit Subscriber" {...props} />;
  return <Create title="Create Subscriber" {...props} />;
};

export const SubscriberCreateOrEdit = (props) => (
  <CreateOrEdit {...props}>
    <SimpleForm>
      <TextField source="course" />
      <TextField source="fullName" />
      <TextField source="email" />
      <TextField source="phone" />
      <TextField source="dateBirth" />
      <TextField source="neighborhood" />
      <TextField source="city" />
      <ReferenceManyField
        label="Comments"
        reference="comment"
        target="subscriber_id"
      >
        <Datagrid>
          <TextField source="author" />
          <TextField source="comment" />
        </Datagrid>
      </ReferenceManyField>
      <BooleanInput source="approved" />
      <BooleanInput source="hackathon" />
      <ArrayInput source="observation">
        <SimpleFormIterator>
          <TextInput source="autor" label="Author" />
          <TextInput source="comment" label="Comment" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </CreateOrEdit>
);
