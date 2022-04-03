import React, { useContext } from 'react'
import {Container, Row, Col, Card, Text, Spacer, Table} from "@nextui-org/react"
import { useState, useEffect} from 'react';
import DataContext from '../store/data-store';
function Users() 
{
  const dataCtx = useContext(DataContext);
  var user = dataCtx.getUser();
  var balence = dataCtx.getBalence();
  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "accountid",
      label: "AccountID",
    },
  ];
  const rows = [
    {
      key: "1",
      name: "Tony Reichert",
      accountid: "123",
    },
    {
      key: "2",
      name: "Zoey Lang",
      accountid: "456",
    },
    {
      key: "3",
      name: "Jane Fisher",
      accountid: "789",
    },
    {
      key: "4",
      name: "William Howard",
      accountid: "101112",
    },
  ];
  return (
    <Container gap={0}>
      <Spacer y={2}/>
      <Row gap={1}>
        <Col>
          <Container gap={0}>
          <Row gap={1}>
            <Card color="success">
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                Account Details
              </Text>
            </Card>
            </Row>
            <Spacer y={1}/>
            <Row gap={1}>
            <Card color="secondary">
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                Name: {user}
              </Text>
            </Card>
            </Row>
            <Spacer y={1}/>
            <Row gap={1}>
            <Card color="secondary">
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                Balence: {balence}
              </Text>
            </Card>
            </Row>
          </Container>
        </Col>
        <Col>
          <Table
            aria-label="Example table with dynamic content"
            css={{
              height: "auto",
              minWidth: "100%",
            }}
          >
            <Table.Header columns={columns}>
              {(column) => (
                <Table.Column key={column.key}>{column.label}</Table.Column>
              )}
            </Table.Header>
            <Table.Body items={rows}>
              {(item) => (
                <Table.Row key={item.key}>
                  {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
                </Table.Row>
              )}
            </Table.Body>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
  
  export default Users;