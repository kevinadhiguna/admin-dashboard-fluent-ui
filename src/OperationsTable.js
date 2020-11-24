import React from 'react';
import { DetailsList } from '@fluentui/react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import 'office-ui-fabric-react/dist/css/fabric.css';

const classNames = mergeStyleSets({
    table: {
        margin: 'auto',
    },
});

const operations = [
    {
      from: '0000 0284 7529 4751 8475',
      to: '0980 9808 8200 7680',
      amount: '$1 510',
      date: '20-05-2020',
    },
    {
      from: '0000 0284 7529 4751 8475',
      to: '0980 9808 8200 7680',
      amount: '$1 010',
      date: '19-05-2020',
    },
    {
      from: '0000 0284 7529 4751 8475',
      to: '0980 9808 8200 7680',
      amount: '$1 350',
      date: '18-05-2020',
    },
    {
      from: '0000 0284 7529 4751 8475',
      to: '0980 9808 8200 7680',
      amount: '$1 900',
      date: '18-05-2020',
    },
    {
      from: '0000 0284 7529 4751 8475',
      to: '0980 9808 8200 7680',
      amount: '$6 350',
      date: '17-05-2020',
    },
]

const columns = [
    {key: 'column', name: 'From', fieldName: 'from', minWidth: 100, maxWidth: 300, isResizable: true},
    {key: 'column', name: 'To', fieldName: 'to', minWidth: 100, maxWidth: 300, isResizable: true},
    {key: 'column', name: 'Amount', fieldName: 'amount', minWidth: 100, maxWidth: 300, isResizable: true},
    {key: 'column', name: 'Date', fieldName: 'date', minWidth: 100, maxWidth: 300, isResizable: true},
]

const OperationsTable = () => {
    return(
        <div data-is-scrollable={true}>
            <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.table}`}>
                <DetailsList
                    items={operations}
                    columns={columns}
                    selectionMode={0}
                />
            </div>
        </div>
    );
}

export default OperationsTable;
