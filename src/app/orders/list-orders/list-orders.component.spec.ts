import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrdersComponent } from './list-orders.component';

/*describe('ListOrdersComponent', () => {
  let component: ListOrdersComponent;
  let fixture: ComponentFixture<ListOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});*/

fdescribe('This is my first test script description', () => {
  var expectedValue = 10;
  var actualValue = 10;
  it('First Test Script', ()=> {
    expect(actualValue).toBe(expectedValue);
    console.log('Inside First Test script');
    console.log('expectedValue= ' + expectedValue);
    console.log('actualValue= ' + actualValue);
  });
});
