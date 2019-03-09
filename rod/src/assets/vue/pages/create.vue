<template>
  <f7-page>
    <f7-navbar title="Criar Pessoa" back-link="Back" sliding></f7-navbar>
        <section id="app" class="section">
        <form>
            <h1 class="title is-1">
            {{form.formName}}
            </h1>

            <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input class="input" type="text" v-model="form.userName" />
            </div>
            </div>


            <div class="list">
                <ul>
                    <li>
                    <label class="item-radio item-content">
                        <input type="radio" value="whataburger" v-model="form.favoriteHamburger" checked />
                        <i class="icon icon-radio"></i>
                        <div class="item-inner">
                        <div class="item-title">Whataburger</div>
                        </div>
                    </label>
                    </li>
                    <li>
                    <label class="item-radio item-content">
                        <input type="radio" value="pterrys" v-model="form.favoriteHamburger"/>
                        <i class="icon icon-radio"></i>
                        <div class="item-inner">
                        <div class="item-title">P.Terry's</div>
                        </div>
                    </label>
                    </li>
                    <li>
                    <label class="item-radio item-content">
                        <input type="radio" value="hopdoddy" v-model="form.favoriteHamburger"/>
                        <i class="icon icon-radio"></i>
                        <div class="item-inner">
                        <div class="item-title">Hopdoddy</div>
                        </div>
                    </label>
                    </li>
                </ul>
            </div>

            <div class="field">
            <label class="label">Favorite Hangout</label>
            <div class="control">
                <label>
                <input type="checkbox" value="barton-springs" v-model="form.favoriteHangout" />
                Barton Springs
                </label>
                <br>
                <label>
                <input type="checkbox" value="zilker-park" v-model="form.favoriteHangout" />
                Zilker Park
                </label>
                <br>
                <label>
                <input type="checkbox" value="sixth-stree" v-model="form.favoriteHangout" />
                Sixth Street
                </label>
            </div>
            </div>

            <div class="field">
            <label class="label">How many hours a week do you work?</label>
            <div class="control">
                <h4 class="title is-4">
                {{form.workHours}} / 80
                </h4>
                <input type="range" min="0" max="80" v-model="form.workHours"/>
            </div>
            </div>

            <input class="button is-primary margin-bottom" type="submit" @click.prevent="fakeSubmit" />

        </form>
        
        <transition name="fade" mode="out-in">
            <article class="message is-primary" v-show="showSubmitFeedback">
            <div class="message-header">
                <p>Fake Send Status:</p>
            </div>
            <div class="message-body">
                Successfully Submitted!
            </div>
            </article>
        </transition>
        
        <hr>
        
        <h5>
            JSON
        </h5>
        <pre><code>{{form}}</code></pre>
        </section>
  </f7-page>
</template>
<script>


 export default {
    data () {
        return {
            form: {
                formName: 'Tell Us About Yourself',
                userName: '',
                favoriteColor: 'Red',
                favoriteHamburger: '',
                favoriteHangout: [],
                workHours: 0
            },
            showSubmitFeedback: false
        }
    },
    methods: {
       fakeSubmit(){
            this.showSubmitFeedback = true;
            setTimeout(() => {
                this.showSubmitFeedback = false;
            }, 3000);
        }
    }
  };
</script>
