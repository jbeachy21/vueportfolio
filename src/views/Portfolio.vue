<template>
  <div id="portfolio">
    <br /><br />
    <h2 class="text-center" style="color:#fff;">Web Development Projects</h2>

    <v-container z-index: 999;>
      <v-row>
        <!-- 1 -->
        <v-col>
          <v-hover>
            <template v-slot="{ hover }">
              <v-card
                max-width="450"
                max-height="482"
                :elevation="hover ? 24 : 6"
              >
                <v-img
                  class="white--text align-end"
                  height="250px"
                  src=".././assets/giftastic.png"
                ></v-img>
                <v-card-subtitle class="pb-0">Giftastic</v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    fab
                    color="blue"
                    text
                    href="https://jbeachy21.github.io/Giftastic/index.html"
                    target="_blank"
                    >Site</v-btn
                  >

                  <v-btn
                    fab
                    id="github2"
                    color="Purple"
                    text
                    href="https://github.com/jbeachy21/jbeachy21.github.io/tree/master/Giftastic"
                    target="_blank"
                  >
                    <v-icon>fab fa-github</v-icon>
                  </v-btn>

                  <v-btn icon @click="show1 = !show1"
                    ><v-icon>{{
                      show1 ? "mdi-chevron-up" : "mdi-chevron-down"
                    }}</v-icon></v-btn
                  >
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="show1">
                    <v-divider></v-divider>

                    <v-card-text class="text--primary">
                      <p>
                        This project uses the Giphy API to display GIFs
                        pretaining to name of the button clicked. Additional
                        buttons can also be added and then used to display GIFs.
                      </p>
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>

        <!-- 2 -->
        <v-col>
          <v-hover>
            <template v-slot="{ hover }">
              <v-card
                :elevation="hover ? 24 : 6"
                max-width="450"
                max-height="482"
              >
                <v-img
                  class="white--text align-end"
                  height="250px"
                  src="../assets/crystal2.png"
                ></v-img>
                <v-card-subtitle class="pb-0"
                  >Crystal Collector</v-card-subtitle
                >
                <v-card-actions>
                  <v-btn
                    fab
                    color="blue"
                    text
                    href="https://jbeachy21.github.io/jbeachy21.github.io/CrystalCollector/CrystalCollector.html"
                    target="_blank"
                  >
                    Site</v-btn
                  >

                  <v-btn
                    onMouseOver="this.style.color='#6e5494"
                    color="Purple"
                    fab
                    text
                    href="https://github.com/jbeachy21/jbeachy21.github.io/tree/master/CrystalCollector"
                    target="_blank"
                  >
                    <v-icon>fab fa-github</v-icon></v-btn
                  >

                  <v-btn icon @click="show2 = !show2">
                    <v-icon>{{
                      show2 ? "mdi-chevron-up" : "mdi-chevron-down"
                    }}</v-icon></v-btn
                  ></v-card-actions
                >

                <v-expand-transition
                  ><div v-show="show2">
                    <v-divider></v-divider>

                    <v-card-text class="text--primary">
                      <p>
                        This project makes use of the data attribute to randomly
                        assign integer values in a range to 4 buttons. The goal
                        is to click these buttons to perfectly reach the score
                        goal to win the game.
                      </p>
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <!-- 3 -->
        <v-col>
          <v-hover>
            <template v-slot="{ hover }">
              <v-card
                :elevation="hover ? 24 : 6"
                max-width="450"
                max-height="482"
              >
                <v-img
                  class="white--text align-end"
                  height="250px"
                  src=".././assets/train.jpg"
                >
                </v-img>

                <v-card-subtitle class="pb-0">Train Scheduler</v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    fab
                    color="blue"
                    text
                    href="https://jbeachy21.github.io/Firebase/index.html"
                    target="_blank"
                  >
                    Site
                  </v-btn>

                  <v-btn
                    fab
                    id="github2"
                    color="Purple"
                    text
                    href="https://github.com/jbeachy21/jbeachy21.github.io/tree/master/Firebase"
                    target="_blank"
                  >
                    <v-icon>fab fa-github</v-icon>
                  </v-btn>

                  <v-btn icon @click="show3 = !show3">
                    <v-icon>{{
                      show3 ? "mdi-chevron-up" : "mdi-chevron-down"
                    }}</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="show3">
                    <v-divider></v-divider>

                    <v-card-text class="text--primary">
                      <p>
                        This project uses Firebase, to sync train schedule data.
                        Arrival times are calcuated using the JavaScript
                        library, moment.
                      </p>
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>

        <!-- 4 -->

        <v-col>
          <v-hover>
            <template v-slot="{ hover }">
              <v-card
                :elevation="hover ? 24 : 6"
                max-width="450"
                max-height="482"
              >
                <v-img
                  class="white--text align-end"
                  height="250px"
                  src=".././assets/friend.png"
                >
                </v-img>

                <v-card-subtitle class="pb-0">Friend Finder</v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    fab
                    color="blue"
                    text
                    href="https://friendfinder1011.herokuapp.com/"
                    target="_blank"
                  >
                    Site
                  </v-btn>

                  <v-btn
                    fab
                    id="github2"
                    color="Purple"
                    text
                    href="https://github.com/jbeachy21/FriendFinder"
                    target="_blank"
                  >
                    <v-icon>fab fa-github</v-icon>
                  </v-btn>

                  <v-btn icon @click="show4 = !show4">
                    <v-icon>{{
                      show4 ? "mdi-chevron-up" : "mdi-chevron-down"
                    }}</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="show4">
                    <v-divider></v-divider>

                    <v-card-text class="text--primary">
                      <p>
                        This project uses node and express to assign you a
                        friend like in facebook based on your answers to a
                        survey.
                      </p>
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>

      <v-row>
        <!-- 5 -->

        <v-col>
          <v-hover>
            <template v-slot="{ hover }">
              <v-card
                :elevation="hover ? 24 : 6"
                max-width="450"
                max-height="482"
              >
                <v-img
                  class="white--text align-end"
                  height="250px"
                  src=".././assets/beer.png"
                >
                </v-img>

                <v-card-subtitle class="pb-0">Beer Reviews</v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    fab
                    color="blue"
                    text
                    href="https://jbeachy21.github.io/BeerReviews/index.html"
                    target="_blank"
                  >
                    Site
                  </v-btn>

                  <v-btn
                    fab
                    id="github2"
                    color="Purple"
                    text
                    href="https://github.com/jbeachy21/BeerReviews"
                    target="_blank"
                  >
                    <v-icon>fab fa-github</v-icon>
                  </v-btn>

                  <v-btn icon @click="show5 = !show5">
                    <v-icon>{{
                      show5 ? "mdi-chevron-up" : "mdi-chevron-down"
                    }}</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="show5">
                    <v-divider></v-divider>

                    <v-card-text class="text--primary">
                      <p>
                        A Brewery review website for the numerous breweries in
                        the state of MN. It uses materialize, jQuery, and
                        JavaScript.
                      </p>
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>

        <!-- 6 -->

        <v-col>
          <v-hover>
            <template v-slot="{ hover }">
              <v-card
                :elevation="hover ? 24 : 6"
                max-width="450"
                max-height="482"
              >
                <v-img
                  class="white--text align-end"
                  height="250px"
                  src=".././assets/liri.jpg"
                >
                </v-img>

                <v-card-subtitle class="pb-0">LIRI</v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    fab
                    id="github2"
                    color="Purple"
                    text
                    href="https://github.com/jbeachy21/LIRI"
                    target="_blank"
                  >
                    <v-icon>fab fa-github</v-icon>
                  </v-btn>

                  <v-btn icon @click="show6 = !show6">
                    <v-icon>{{
                      show6 ? "mdi-chevron-up" : "mdi-chevron-down"
                    }}</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="show6">
                    <v-divider></v-divider>

                    <v-card-text class="text--primary">
                      <p>
                        This project uses Node.js to create a command line
                        interface (CLI). Four commands, concert-this,
                        movie-this, spotify-this-song, and do-what-it-says, are
                        used to access 3 different APIs and their data.
                      </p>
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>

      <v-row>
        <!-- 7 -->
        <v-col>
          <v-hover>
            <template v-slot="{ hover }">
              <v-card
                :elevation="hover ? 24 : 6"
                max-width="450"
                max-height="482"
              >
                <v-img
                  class="white--text align-end"
                  height="250px"
                  src=".././assets/clickygame.png"
                >
                </v-img>

                <v-card-subtitle class="pb-0">Clicky Game</v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    fab
                    color="blue"
                    text
                    href="https://agile-fjord-96128.herokuapp.com/"
                    target="_blank"
                  >
                    Site
                  </v-btn>

                  <v-btn
                    fab
                    id="github2"
                    color="Purple"
                    text
                    href="https://github.com/jbeachy21/clickygame"
                    target="_blank"
                  >
                    <v-icon>fab fa-github</v-icon>
                  </v-btn>

                  <v-btn icon @click="show7 = !show7">
                    <v-icon>{{
                      show7 ? "mdi-chevron-up" : "mdi-chevron-down"
                    }}</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="show7">
                    <v-divider></v-divider>

                    <v-card-text class="text--primary">
                      <p>
                        My first project using react, a simple memory game,
                        which after clicking a card will shuffle and if any card
                        is clicked twice will reset the score to 0.
                      </p>
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>

        <!-- 8 -->

        <v-col>
          <v-hover>
            <template v-slot="{ hover }">
              <v-card
                :elevation="hover ? 24 : 6"
                max-width="450"
                max-height="482"
              >
                <v-img
                  class="white--text align-end"
                  height="250px"
                  src=".././assets/jamster.jpg"
                >
                </v-img>

                <v-card-subtitle class="pb-0">Jamster</v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    fab
                    color="blue"
                    text
                    href="https://betterjamster.herokuapp.com/"
                    target="_blank"
                  >
                    Site
                  </v-btn>

                  <v-btn
                    fab
                    id="github2"
                    color="Purple"
                    text
                    href="https://github.com/jbeachy21/Jamster"
                    target="_blank"
                  >
                    <v-icon>fab fa-github</v-icon>
                  </v-btn>

                  <!-- test -->
                  <v-btn icon @click="show8 = !show8">
                    <v-icon>{{
                      show8 ? "mdi-chevron-up" : "mdi-chevron-down"
                    }}</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="show8">
                    <v-divider></v-divider>

                    <v-card-text class="text--primary">
                      <p>
                        Jamster is a react application designed for musicians,
                        with the intention of matching them with other musicians
                        who wish to jam. To start, create an account, enter your
                        email, password, and select your primary instrument and
                        skill level.
                      </p>
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
      <br />
      <br />
      <br /><br /><br />
    </v-container>

<!-- Data Projects -->



    <h2 class="text-center" style="color:#fff;">Data Projects</h2>

    <v-container z-index: 999; style="margin-bottom: 25px;">
      <v-row>
        <!-- 9 -->
        <v-col>
          <v-hover>
            <template v-slot="{ hover }">
              <v-card
                max-width="450"
                max-height="482"
                :elevation="hover ? 24 : 6"
              >
                <v-img
                  class="white--text align-end"
                  height="250px"
                  src=".././assets/ufosightings.png"
                ></v-img>
                <v-card-subtitle class="pb-0">UFO Sightings</v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    fab
                    color="blue"
                    text
                    href="https://java-script-challenge.vercel.app/"
                    target="_blank"
                    >Site</v-btn
                  >

                  <v-btn
                    fab
                    id="github2"
                    color="Purple"
                    text
                    href="https://github.com/jbeachy21/JavaScriptChallenge"
                    target="_blank"
                  >
                    <v-icon>fab fa-github</v-icon>
                  </v-btn>

                  <v-btn icon @click="show9 = !show9"
                    ><v-icon>{{
                      show9 ? "mdi-chevron-up" : "mdi-chevron-down"
                    }}</v-icon></v-btn
                  >
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="show9">
                    <v-divider></v-divider>

                    <v-card-text class="text--primary">
                      <p>
                      In this project, a dynamic table was created in order to display UFO sighting 
                      data imported from a JSON file.  D3, JavaScript, HTML, and CSS were used.  

                      </p>
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
<!-- 10 -->
<v-row>
        <v-col>
          <v-hover>
            <template v-slot="{ hover }">
              <v-card
                :elevation="hover ? 24 : 6"
                max-width="450"
                max-height="482"
              >
                <v-img
                  class="white--text align-end"
                  height="250px"
                  src="../assets/bellybutton.png"
                ></v-img>
                <v-card-subtitle class="pb-0"
                  >Belly Button Biodiversity</v-card-subtitle
                >
                <v-card-actions>
                  <v-btn
                    fab
                    color="blue"
                    text
                    href="https://belly-button-bio-diversity.vercel.app/"
                    target="_blank"
                  >
                    Site</v-btn
                  >

                  <v-btn
                    onMouseOver="this.style.color='#6e5494"
                    color="Purple"
                    fab
                    text
                    href="https://github.com/jbeachy21/BellyButtonBioDiversity"
                    target="_blank"
                  >
                    <v-icon>fab fa-github</v-icon></v-btn
                  >

                  <v-btn icon @click="show10 = !show10">
                    <v-icon>{{
                      show10 ? "mdi-chevron-up" : "mdi-chevron-down"
                    }}</v-icon></v-btn
                  ></v-card-actions
                >

                <v-expand-transition
                  ><div v-show="show10">
                    <v-divider></v-divider>

                    <v-card-text class="text--primary">
                      <p>
                        This project makes use of the data attribute to randomly
                        assign integer values in a range to 4 buttons. The goal
                        is to click these buttons to perfectly reach the score
                        goal to win the game.
                      </p>
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>
</v-row>  





    
        <!-- 11 -->
      <v-row>
        <v-col>
          <v-hover>
            <template v-slot="{ hover }">
              <v-card
                max-width="450"
                max-height="482"
                :elevation="hover ? 24 : 6"
              >
                <v-img
                  class="white--text align-end"
                  height="250px"
                  src=".././assets/d3times.png"
                ></v-img>
                <v-card-subtitle class="pb-0">Data Journalism</v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    fab
                    color="blue"
                    text
                    href="https://d3-challenge.vercel.app/"
                    target="_blank"
                    >Site</v-btn
                  >

                  <v-btn
                    fab
                    id="github2"
                    color="Purple"
                    text
                    href="https://github.com/jbeachy21/JavaScriptChallenge"
                    target="_blank"
                  >
                    <v-icon>fab fa-github</v-icon>
                  </v-btn>

                  <v-btn icon @click="show11 = !show11"
                    ><v-icon>{{
                      show11 ? "mdi-chevron-up" : "mdi-chevron-down"
                    }}</v-icon></v-btn
                  >
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="show11">
                    <v-divider></v-divider>

                    <v-card-text class="text--primary">
                      <p>
                      In this project, a dynamic table was created to compare health risks particular 
                      demographics are facing.  D3, JavaScript, HTML, and CSS were used.  

                      </p>
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>
<!-- 12 -->
        <v-col>
          <v-hover>
            <template v-slot="{ hover }">
              <v-card
                :elevation="hover ? 24 : 6"
                max-width="450"
                max-height="482"
              >
                <v-img
                  class="white--text align-end"
                  height="250px"
                  src="../assets/leaflet.png"
                ></v-img>
                <v-card-subtitle class="pb-0"
                  >Leaflet Mapping</v-card-subtitle
                >
                <v-card-actions>
                  <v-btn
                    fab
                    color="blue"
                    text
                    href="https://leaflet-omega.vercel.app/"
                    target="_blank"
                  >
                    Site</v-btn
                  >

                  <v-btn
                    onMouseOver="this.style.color='#6e5494"
                    color="Purple"
                    fab
                    text
                    href="https://github.com/jbeachy21/Leaflet"
                    target="_blank"
                  >
                    <v-icon>fab fa-github</v-icon></v-btn
                  >

                  <v-btn icon @click="show12 = !show12">
                    <v-icon>{{
                      show12 ? "mdi-chevron-up" : "mdi-chevron-down"
                    }}</v-icon></v-btn
                  ></v-card-actions
                >

                <v-expand-transition
                  ><div v-show="show12">
                    <v-divider></v-divider>

                    <v-card-text class="text--primary">
                      <p>
                        This project makes use of the Mapbox API in order to 
                        plot USGS data using Leaflet.  
                      </p>
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>  
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Vue from "vue";
import VueParticles from "vue-particles";
Vue.use(VueParticles);
// @ is an alias to /src

import ParticlesBg from "particles-bg-vue";
Vue.use(ParticlesBg);

export default {
  data: () => ({
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    show5: false,
    show6: false,
    show7: false,
    show8: false,
    show9: false,
    show10: false,
    show11: false,
    show12: false,
  }),
  name: "portfolio",
  components: {},
};
</script>
