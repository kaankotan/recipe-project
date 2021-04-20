import React, {ChangeEvent, ReactEventHandler} from 'react';
import {Form, Col, Row} from 'react-bootstrap';
import { Food } from '../../utils/FoodFactory';
import { useSelector, useDispatch } from 'react-redux'

export default function Ingredient({someIndex, ingredient}: any) {

  const reduxDispatch = useDispatch()

  function selectVariation(event: React.ChangeEvent<HTMLSelectElement>) {
    reduxDispatch({type:'UPDATE_VARIATION', variationIndex: parseInt(event.target.value), index: someIndex})
  }

  function selectAmount(event: React.ChangeEvent<HTMLSelectElement>) {
    reduxDispatch({type:'UPDATE_AMOUNT', amount: parseInt(event.target.value), index: someIndex})
  }

  return (
    <Form.Group className="d-flex flex-row align-items-center" as={Row} controlId="formPlaintextPassword">
      <Form.Label column sm="2">
        {ingredient.name}
      </Form.Label>
      <Col sm="2">
        <Form.Control onChange={selectAmount} type="number" placeholder="Amount" />
      </Col>
      <Col sm="2">
        <p className="m-0">{ingredient.amountType}</p>
      </Col>
      <Col sm="2">
        {ingredient.variations ?
          <select onChange={selectVariation} className="form-control" name="variations" id="variations">
            {ingredient.variations.map((variation: string, index: number) => {
              return <option key={`${variation}_${index}`} value={index}>{variation}</option>
            })}
          </select>
          :
          null
        }
      </Col>
      <Col className="d-flex flex-row justify-content-end" sm="4">
        <span className="btn btn-danger">X</span>
      </Col>
    </Form.Group>
  )
}

