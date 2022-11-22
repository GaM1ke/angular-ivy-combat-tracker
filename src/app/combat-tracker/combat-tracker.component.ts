import { Component } from '@angular/core';
import { CombatEntity } from '../interface/combat-entity-interface';

@Component({
  selector: 'app-combat-tracker',
  templateUrl: './combat-tracker.component.html',
  styleUrls: ['./combat-tracker.component.css'],
})
export class CombatTrackerComponent {
  combatEntities: Array<CombatEntity> = [];

  createEntity() {
    const newEntity = {
      name: 'test',
      maxHp: 12,
      currentHp: 7,
      initiative: 2,
      imageUrl: 'blabla',
    };

    this.combatEntities.push(newEntity);
  }
}
