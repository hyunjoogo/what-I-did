import CreateActionForm from '../components/create/CreateActionForm/CreateActionForm';
import BasicLayout from './layout/BasicLayout';

const CreateAction = () => {
  return (
    <BasicLayout headerText="행동 설정하기">
      <CreateActionForm />
    </BasicLayout>
  );
};

export default CreateAction;
