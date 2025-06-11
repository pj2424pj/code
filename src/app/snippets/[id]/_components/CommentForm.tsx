import React from 'react'
interface CommentFormProps {
  onSubmit: (comment: string) => Promise<void>;
  isSubmitting: boolean;
}
function CommentForm({ isSubmitting, onSubmit }: CommentFormProps) {
  return (
    <div>CommentForm</div>
  )
}

export default CommentForm