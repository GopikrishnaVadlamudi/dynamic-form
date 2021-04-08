import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular 5";
  orderForm: FormGroup;

  obj = [
    {
      name: "umair",
      subItems: [
        {
          subname: "option1",
          description: "value"
        },
        {
          subname: "option2",
          description: "value2"
        },
        {
          subname: "option3",
          description: "value3"
        }
      ]
    },
    {
      name: "ali",
      subItems: [
        {
          subname: "option1",
          description: "value"
        },
        {
          subname: "option2",
          description: "value2"
        },
        {
          subname: "option3",
          description: "value3"
        }
      ]
    }
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm(this.obj);
  }

  createForm(obj) {
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
      arr.push(this.createItem(obj[i]));
    }
    this.orderForm = this.formBuilder.group({
      items: this.formBuilder.array(arr)
    });
  }

  createItem(obj): FormGroup {
    var subArr = [];
    for (var i = 0; i < obj.subItems.length; i++) {
      subArr.push(this.createSubItem(obj.subItems[i]));
    }
    return this.formBuilder.group({
      name: obj.name,
      subItems: this.formBuilder.array(subArr)
    });
  }

  createSubItem(subItem): FormGroup {
    return this.formBuilder.group({
      subname: subItem.subname,
      description: subItem.description
    });
  }

  addSubItems(item: FormGroup): void {
    let subItems = item.get("subItems") as FormArray;
    var newSubItem = {
      subname: "attribure6",
      description: "value"
    };
    subItems.push(this.createSubItem(newSubItem));
  }

  addItems(): void {
    console.log(1);
    let items = this.orderForm.get("items") as FormArray;
    var newItem = {
      name: "SecurityGroup",
      subItems: [
        {
          subname: "attribure6",
          description: "value"
        }
      ]
    };
    items.push(this.createItem(newItem));
  }

  // createNewItem(item): FormGroup {
  //   console.log(2)
  //   return this.formBuilder.group({
  //     name: item.name,
  //     subItems: this.formBuilder.array(this.createSubItem(item.subItems));
  //   });
  // }
}
//
