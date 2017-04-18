import { Component, HostListener } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'nav-menu',
    template: ` 
        <div class = 'menu'>
          <button class='usual_btn' id='Menu' (click)='openMenu()'>Menu</button>
          <ul [ngClass]='menuClass' class='menuDefault'>
            <li class = 'usual_btn'><a href="#">menu1</a></li>
            <li class = 'usual_btn'><a href="#">menu2</a></li>
            <li class = 'usual_btn'><a href="#">menu3</a></li>
            <li class = 'usual_btn'><a href="#">menu4</a></li>
          </ul>
        </div>`,
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {
    public menuClass = 'menuClosed';
    openMenu() {
        
        this.menuClass = this.menuClass === 'menuClosed' ? 'menuOpened' : 'menuClosed';
    }
    @HostListener('mouseleave') onMouseLeave() {
        setTimeout(()=>{this.menuClass = 'menuClosed';},500);
        
        
    }
}