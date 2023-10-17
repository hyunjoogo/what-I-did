import React, { Suspense } from 'react';
import RecordLayout from './layout/RecordLayout';
import ActionRecordContents from '../components/record/ActionRecordContents/ActionRecordContents';
import LoadingFallback from '../components/common/LoadingFallback/LoadingFallback';
import color from '../styles/color';
import ActionPlanProvider from '../contexts/ActionPlanProvider';

const ActionRecord = () => {
  return (
    <RecordLayout>
      <Suspense fallback={<LoadingFallback circleColor={color.red[500]} />}>
        <ActionPlanProvider>
          <ActionRecordContents />
        </ActionPlanProvider>
      </Suspense>
    </RecordLayout>
  );
};

export default ActionRecord;
