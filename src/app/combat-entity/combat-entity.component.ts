import { Component, Input } from '@angular/core';
import { CombatEntity } from '../interface/combat-entity-interface';

@Component({
  selector: 'app-combat-entity',
  templateUrl: './combat-entity.component.html',
  styleUrls: ['./combat-entity.component.css'],
})
export class CombatEntityComponent {
  @Input() entity: CombatEntity;

  constructor() {}
}

