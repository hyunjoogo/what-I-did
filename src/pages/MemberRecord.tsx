import RecordLayout from './layout/RecordLayout';
import MemberRecordContents from '../components/member/MemberRecordContents/MemberRecordContents';
import LoadingFallback from '../components/common/LoadingFallback/LoadingFallback';
import color from '../styles/color';
import React, { Suspense } from 'react';
import ActionPlansProvider from '../contexts/ActionPlansProvider';

const MemberRecord = () => {
  return (
    <RecordLayout>
      <Suspense fallback={<LoadingFallback circleColor={color.red[500]} />}>
        <ActionPlansProvider>
          <MemberRecordContents />
        </ActionPlansProvider>
      </Suspense>
    </RecordLayout>
  );
};

export default MemberRecord;
