import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemons/pokemon.service';
import { PokemonDetails } from 'src/app/interfaces/pokemonDetails.interface';

@Component({
  selector: 'app-pokemon-modal',
  templateUrl: './pokemon-modal.page.html',
  styleUrls: ['./pokemon-modal.page.scss'],
})
export class PokemonModalPage implements OnInit{

  pokemon: Pokemon | undefined;
  pokemonDetails: PokemonDetails | undefined;
  
  constructor(
    private navParams: NavParams,
    private pokemonService: PokemonService,
    private modalController: ModalController
  ) { }

  ngOnInit(): void {
    this.pokemon = this.navParams.get('pokemon');
    if (this.pokemon?.pokeIndex !== undefined) {
      this.pokemonService.getPokemonDetails(Number(this.pokemon.pokeIndex)).subscribe(pokemon => {
        this.pokemonDetails = pokemon;
      });
    }
  }

  closeModal(){
    this.modalController.dismiss();
  }
}