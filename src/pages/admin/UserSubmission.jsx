import React from 'react'
import SubmissionTable from '../../components/admin/SubmissionTable'
import { useGetSubmission } from '../../hooks/useGetSubmission';
import { useUpdateSubmission } from '../../hooks/useUpdateSubmission';

const UserSubmisson = () => {

  const { data : submission, isLoading, isError, error } = useGetSubmission();
  const { mutate: updateSubmission, isPending } = useUpdateSubmission();
  console.log(submission)

  return (
     <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Submissions</h1>
      <SubmissionTable
        data={submission}
        isLoading={isLoading}
        isError={isError}
        error={error}
        update={updateSubmission}
        isPending={isPending}
      />
    </div>
  )
}

export default UserSubmisson