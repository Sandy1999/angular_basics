import { Component,ViewChild,ViewContainerRef,ComponentFactoryResolver } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test App';
  name = 'Angular App';
}
// @Component({
//   selector: 'my-app',
//   template: `
//     <p>Paragraph One</p>
//     <template #clone>
//       <p>Paragraph Two</p>
//     </template>
//     <p>Paragraph Three</p>

//     <button (click)="cloneTemplate()">Clone Template</button>

//     <div #container></div>
//   `
// })
// export class AppComponent{
//   // What to clone
//   @ViewChild('clone') template;

//   // Where to insert the cloned content
//   @ViewChild('container', {read:ViewContainerRef}) container;

//   constructor(private resolver:ComponentFactoryResolver){}

//   cloneTemplate(){
//       this.container.createEmbeddedView(this.template);
//   }
// }