import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { sort, round, equal } from 'mathjs';
@Component({
  selector: 'app-filter-me',
  templateUrl: './filter-me.component.html',
  styleUrls: ['./filter-me.component.css']
})
export class FilterMeComponent implements OnInit {
  gridOptions: GridOptions;

  columnDefs = [
    {
      field: 'multiplier',
      type: 'number',
      filter: 'agNumberColumnFilter',
      editable: true
    },
    {
      field: 'price',
      type: 'numericColumn',
      filter: 'agNumberColumnFilter',
      valueGetter: (params) => {
        console.log(params.data.price);
        console.log(params.data.price * params.data.multiplier);
        return params.data.price * params.data.multiplier;
      },
      valueFormatter: (params) => {
        return `$ ${params.value}`;
      },
      valueSetter: (params) => {
        params.data.price = Number(params.newValue);
        console.log('test', params.data.price, params.newValue);
        return true;
      }
    }
  ];

  rowData = [
    { multiplier: 1, price: 100 },
    { multiplier: 1, price: '600' },
    { multiplier: 1, price: 10.03 },
    { multiplier: 2, price: Number.MAX_SAFE_INTEGER }
  ];
  constructor() { }

  ngOnInit(): void {
    this.gridOptions = {
      rowData: this.rowData,
      columnDefs: this.columnDefs,
      onGridReady: this.onGridReady,
      onFilterChanged: this.onFilterChanged,
      onCellValueChanged: this.onCellValueChanged
    };

    console.log(sort([5, 1, 0]));
    console.log(sort(['5', '1', '0']));
    console.log(sort(['15.35', '15.12', '15.03']));
    console.log(round(15.355, 2));
    console.log(round('15.355', 2));
    console.log(round('222.565', 2));
    console.log(round(222.565, 2));
    console.log(equal('15.1555', 15.15552));
  }


  onGridReady(params): void {
    // console.log(params);
  }

  onFilterChanged(params): void {
    // console.log(params);
  }

  onCellValueChanged(params): void {
    console.log(params);
  }

}
