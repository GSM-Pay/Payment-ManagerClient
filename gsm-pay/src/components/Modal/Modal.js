import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import { gql, useMutation } from '@apollo/client'

function exampleReducer(state, action) {
  switch (action.type) {
    case 'close':
      return { open: false }
    case 'open':
      return { open: true, size: action.size }
    default:
      throw new Error('Unsupported action...')
  }
}

const REFUND = gql`
  mutation Refund($tid: Int!) {
    refund(tid: $tid) {
      tid
    }
  }
`;

const ReModal = (props) => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  })
  const { open, size } = state

  const [refund] = useMutation(REFUND);

  let date = new Date(parseInt(props.transaction.createdAt)).toLocaleString();

  return (
    <>
      <Button onClick={() => dispatch({ type: 'open', size: 'mini' })}>
        환불
      </Button>

      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: 'close' })}
      >
        <Modal.Header>상세 내역</Modal.Header>
        <Modal.Content>
          <Header size='medium' textAlign='center'>금액: {props.transaction.amount}원</Header>
          <Header size='medium' textAlign='center'>학생: {props.transaction.user.name}</Header>
          <Header size='medium' textAlign='center'>결제 날짜: {date}</Header>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => dispatch({ type: 'close' })}>
            취소
          </Button>
          <Button positive onClick={() => {
            refund({
              variables: {
                tid: props.transaction.tid,
              }
            }).then(result => {
              if (props.transaction.tid === result.data.refund.tid) {
                window.location.reload()
                dispatch({ type: 'close' })
              }
            }).catch(err => {
              console.log(err)
            })
          }}>
            환불
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default ReModal