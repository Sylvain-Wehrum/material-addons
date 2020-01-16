import { Component, Input } from '@angular/core';
import { NavigationEntry } from '../../navigation-entry';

@Component({
  selector: 'nav-child',
  templateUrl: './nav-child.component.html',
  styleUrls: ['./nav-child.component.scss'],
})
export class NavChildComponent {
  @Input()
  entry: NavigationEntry;

  @Input()
  sublevel = 0;

  toggleChildren(entry: NavigationEntry): void {
    if (!entry.showChildren) {
      entry.showChildren = true;
    } else {
      entry.showChildren = !entry.showChildren;
    }
  }

  isOpen(entry: NavigationEntry, isRouteActive: boolean): boolean {
    if (typeof entry.showChildren === 'undefined' && isRouteActive) {
      entry.showChildren = true;
      return true;
    }
    return !!entry.showChildren;
  }
}
