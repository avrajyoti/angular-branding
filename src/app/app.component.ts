import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'd-brand-test';

  ngOnInit(): void {
    const styleElem = document.head.appendChild(document.createElement('style'));

    const props = this.getProps();

    styleElem.innerHTML = ':root {' +
      '--primary-color: ' + props.primaryColor + ';\n' +
      '--secondary-color: ' + props.secondaryColor + ';\n' +
      '}';
  }

  getProps() {
    return {
      primaryColor: '#488cff',
      secondaryColor: '#d49c99'
    };
  }

}
