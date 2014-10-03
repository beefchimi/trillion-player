document.addEventListener('DOMContentLoaded', function() {


	// Global Variables
	// ----------------------------------------------------------------------------

	// --- Objects and Initial Setup --- \\

	// common objects
	var elBody       = document.body,
		elGenerate   = document.getElementById('generate'),
		elAvatar     = document.getElementById('player_avatar'),
		elAvatarImgs = elAvatar.getElementsByTagName('img');

/*
	var elPartBody  = elAvatar.getElementsByTagName('img')[0],
		elPartHead  = elAvatar.getElementsByTagName('img')[1],
		elPartMouth = elAvatar.getElementsByTagName('img')[2],
		elPartFace  = elAvatar.getElementsByTagName('img')[3],
		elPartHair  = elAvatar.getElementsByTagName('img')[4],
		elPartFlair = elAvatar.getElementsByTagName('img')[5];
*/

	var bodyParts = ['Body_L_Plain_d-bl', 'Body_L_Plain_l-wh', 'Body_L_Plain_l-yl', 'Body_L_Uni_bandit', 'Body_L_Uni_morpheus', 'Body_L_Uni_robo', 'Body_L_Uni_starlord', 'Body_L_Uni_straps', 'Body_L_Uni_strongman', 'Body_L_Uni_tron', 'Body_M_Nude_d-yl', 'Body_M_Nude_l-bl', 'Body_M_Nude_l-gr', 'Body_M_Nude_l-mg', 'Body_M_Nude_l-rd', 'Body_M_Nude_l-yl', 'Body_M_Plain_d-cy', 'Body_M_Plain_d-mg', 'Body_M_Plain_d-yl', 'Body_M_Plain_l-bl', 'Body_M_Plain_l-dk', 'Body_M_Plain_l-gr', 'Body_M_Plain_l-mg', 'Body_M_Plain_l-rd', 'Body_M_Plain_l-yl', 'Body_M_Sexybeast_d-yl', 'Body_M_Sexybeast_l-cy', 'Body_M_Sexybeast_l-gr', 'Body_M_Sexybeast_l-yl', 'Body_M_Spacefarer_d-cy', 'Body_M_Spacefarer_d-mg', 'Body_M_Spacefarer_l-bl', 'Body_M_Spacefarer_l-gr', 'Body_M_Spacefarer_l-wh', 'Body_M_Spacefarer_l-yl', 'Body_M_Striped_d-dk', 'Body_M_Striped_l-bl', 'Body_M_Striped_l-rd', 'Body_M_Uni_astro', 'Body_M_Uni_cop', 'Body_M_Uni_fashion', 'Body_M_Uni_trekkie', 'Body_M_Uni_xmas-sweater', 'Body_S_Plain_l-yl', 'Body_S_Uni_polka', 'Body_S_Uni_robo', 'Body_S_Uni_roboalt', 'Body_S_Uni_tron', 'Body_XL_Fuzz_l-gr', 'Body_XL_Fuzz_l-mg', 'Body_XL_Nude_l-yl', 'Body_XL_Plain_l-gr', 'Body_XL_Shirt_d-gr', 'Body_XL_Shirt_l-bl', 'Body_XL_Shirt_l-wh', 'Body_XL_Shirt_l-yl', 'Body_XL_Uni_armor', 'Body_XL_Uni_crime', 'Body_XL_Uni_darklord', 'Body_XL_Uni_klaxxo', 'Body_XL_Uni_redneck', 'Body_XL_Uni_space-gr', 'Body_XL_Uni_varia'];

	var headParts = ['Head_Normal_d-wh', 'Head_Normal_d-yl', 'Head_Normal_l-bl', 'Head_Normal_l-gr', 'Head_Normal_l-mg', 'Head_Normal_l-rd', 'Head_Normal_l-wh', 'Head_Normal_l-yl', 'Head_Pointy1_l-gr', 'Head_Pointy2_l-bl', 'Head_Pointy2_l-gr', 'Head_Pointy2_l-rd'];

	var mouthParts = ['Mouth_bigkiss_l-bl', 'Mouth_bigkiss_l-mg', 'Mouth_bigmouth-1', 'Mouth_bigmouth-2', 'Mouth_bite-over', 'Mouth_bite-under', 'Mouth_buck_l-rd', 'Mouth_bucky-1', 'Mouth_bucky-2', 'Mouth_bucky-3', 'Mouth_cold', 'Mouth_dropped', 'Mouth_excite', 'Mouth_exciter', 'Mouth_frown-1', 'Mouth_frown-2', 'Mouth_frown-3', 'Mouth_frown-4', 'Mouth_frown-5', 'Mouth_gap_d-mg', 'Mouth_gap_d-yl', 'Mouth_gap_l-bl', 'Mouth_gap_l-rd', 'Mouth_gold-tooth', 'Mouth_grin-1_d-bl', 'Mouth_grin-1_d-mg', 'Mouth_grin-1_d-red', 'Mouth_grin-1_d-yl', 'Mouth_grin-1_l-bl', 'Mouth_grin-1_l-red', 'Mouth_grin-2_d-bl', 'Mouth_grin-2_d-mg', 'Mouth_grin-2_d-red', 'Mouth_grin-2_d-yl', 'Mouth_grin-2_l-bl', 'Mouth_grin-2_l-red', 'Mouth_grin-3_d-bl', 'Mouth_grin-3_d-mg', 'Mouth_grin-3_d-red', 'Mouth_grin-3_d-yl', 'Mouth_grin-3_l-bl', 'Mouth_grin-3_l-red', 'Mouth_grinner-1_l-wh', 'Mouth_grinner-1_l-yl', 'Mouth_grinner-2_l-wh', 'Mouth_grinner-2_l-yl', 'Mouth_just-white', 'Mouth_lips_d-bl', 'Mouth_lips_d-mg', 'Mouth_lips_d-rd', 'Mouth_lips_l-bl', 'Mouth_lips_l-mg', 'Mouth_lips_l-rd', 'Mouth_lipstick-1', 'Mouth_lipstick-2', 'Mouth_muppet', 'Mouth_nosir', 'Mouth_pant', 'Mouth_pearly', 'Mouth_phbt', 'Mouth_pixel-smile', 'Mouth_pixel-teeth', 'Mouth_pursed-1_l-mg', 'Mouth_pursed-1_l-rd', 'Mouth_pursed-2_l-mg', 'Mouth_pursed-2_l-rd', 'Mouth_pursed-3_l-mg', 'Mouth_pursed-3_l-rd', 'Mouth_redlips', 'Mouth_robo-1', 'Mouth_robo-2', 'Mouth_serious', 'Mouth_sidemouth', 'Mouth_smile-big', 'Mouth_smile-tiny', 'Mouth_smirk', 'Mouth_square', 'Mouth_summer-gold', 'Mouth_summer-teeth', 'Mouth_surprised', 'Mouth_unimpressed', 'Mouth_vampire', 'Mouth_wazzap', 'Mouth_whatever_d-dk', 'Mouth_whatever_l-wh', 'Mouth_whistler', 'Mouth_widegrin-1_d-dk'];

	var faceParts = ['Face_alien', 'Face_anime-1_d-cy', 'Face_anime-1_d-dk', 'Face_anime-2_d-dk', 'Face_artiste', 'Face_beak_l-yl', 'Face_boxer', 'Face_cyclops-big_l-bl', 'Face_cyclops_d-dk', 'Face_cyclops_l-mg', 'Face_dead', 'Face_eyes_d-gr', 'Face_eyes_l-bl', 'Face_forknose', 'Face_gentleman', 'Face_handlebar-1', 'Face_handlebar-2', 'Face_handlebar-3', 'Face_handlebar-4', 'Face_morpheus', 'Face_mystic_d-rd', 'Face_mystic_l-bl', 'Face_mystic_l-mg', 'Face_normal_d-rd', 'Face_nostril_l-mg', 'Face_pretty', 'Face_pugilist', 'Face_pugilist_retired', 'Face_robo-cyclo', 'Face_robo', 'Face_sleepy-dog', 'Face_starry_d-dk', 'Face_starry_d-gr', 'Face_static', 'Face_swanson_d-rd', 'Face_swanson_l-mg', 'Face_unibrow'];

	var hairParts = ['Hair_afro_l-bl', 'Hair_aliencrown', 'Hair_antenna-1', 'Hair_antenna-2', 'Hair_ballcap_l-rd', 'Hair_bang-right_d-yl', 'Hair_bang-right_l-wh', 'Hair_bart_d-cy', 'Hair_bart_d-gr', 'Hair_bart_l-bl', 'Hair_bart_l-gr', 'Hair_bart_l-mg', 'Hair_bart_l-rd', 'Hair_bart_l-yl', 'Hair_bob_d-mg', 'Hair_bob_d-yl', 'Hair_bob_l-mg', 'Hair_brawny_d-dk', 'Hair_chef', 'Hair_chinstrap_l-yl', 'Hair_cornrows_l-rd', 'Hair_cowboy', 'Hair_dutchman_l-yl', 'Hair_fade-1_d-bl', 'Hair_fade-2_d-bl', 'Hair_firestarter_l-gr', 'Hair_frankenhair_l-bl', 'Hair_hardhat_l-yl', 'Hair_heman_l-yl', 'Hair_icey_l-cy', 'Hair_judge_l-wh', 'Hair_king', 'Hair_lady_l-gr', 'Hair_ladylike-1_l-mg', 'Hair_ladylike-1_l-yl', 'Hair_ladylike-2_d-mg', 'Hair_ladylike-2_d-rd', 'Hair_ladylike-2_d-yl', 'Hair_ladylike-2_l-bl', 'Hair_ladylike-2_l-wh', 'Hair_longbang_l-bl', 'Hair_madscientist', 'Hair_mohawk-1_l-mg', 'Hair_mohawk-2_l-gr', 'Hair_mohawk-3_l-rd', 'Hair_moptop_l-rd', 'Hair_mugatu_l-wh', 'Hair_mullet_l-bl', 'Hair_ninja_l-bl', 'Hair_party-1_d-bl', 'Hair_party-2_l-bl', 'Hair_party-3_l-mg', 'Hair_party-4_l-mg', 'Hair_perm_d-yl', 'Hair_perm_l-bl', 'Hair_perm_l-yl', 'Hair_picard_d-wh', 'Hair_plain_d-cy', 'Hair_plumber_d-yl', 'Hair_rambo', 'Hair_robohead', 'Hair_robolord_l-gr', 'Hair_ryu', 'Hair_sailor-beard_l-wh', 'Hair_sailor', 'Hair_saltpepper', 'Hair_samuraicop_d-rd', 'Hair_scientist', 'Hair_scotsman_l-wh', 'Hair_sensei', 'Hair_spacelord_l-mg', 'Hair_spacepunk-1_l-gr', 'Hair_spacepunk-2_l-mg', 'Hair_spacepunk-3_l-bl', 'Hair_spacepunk-4_l-bl', 'Hair_spacepunk-5_l-mg', 'Hair_spacepunk-6_l-rd', 'Hair_spacepunk-7_d-bl', 'Hair_starchild_l-yl', 'Hair_starlord', 'Hair_stoner_l-rd', 'Hair_stubble_d-dk', 'Hair_stubble_d-rd', 'Hair_stubble_l-bl', 'Hair_stubble_l-yl', 'Hair_superhero_l-bl', 'Hair_swashbuckler_d-rd', 'Hair_swoop-1_d-yl', 'Hair_swoop-2_d-cy', 'Hair_swoop-2_d-gr', 'Hair_swoop-2_l-bl', 'Hair_swoop-2_l-mg', 'Hair_swoop-2_l-yl', 'Hair_thirdeye', 'Hair_tiara_l-yl', 'Hair_topknot_l-bl', 'Hair_tril_l-mg', 'Hair_tuque_l-rd', 'Hair_unclesam', 'Hair_viking-full', 'Hair_viking-hair', 'Hair_viking-hat', 'Hair_whipit_l-rd', 'Hair_wintercap_l-rd', 'Hair_wizard_l-bl', 'Hair_worst_d-bl', 'Hair_zissou'];

	var flairParts = ['Flair_3d', 'Flair_crook', 'Flair_ebola', 'Flair_eyepatch', 'Flair_geordi', 'Flair_grill', 'Flair_hipster', 'Flair_klaxxo-glasses', 'Flair_lazer-CGA', 'Flair_lazer-evil', 'Flair_lazer-fashion', 'Flair_lazer-radical', 'Flair_mask-cybord_d-rd', 'Flair_mask-cyborg_d-wh', 'Flair_mask-gold', 'Flair_mask-pirate', 'Flair_mask-skull', 'Flair_mask-star', 'Flair_roboshades-1', 'Flair_roboshades-2', 'Flair_safety', 'Flair_shutters_d-mg', 'Flair_shutters_l-bl', 'Flair_shutters_l-cy', 'Flair_shutters_l-gr', 'Flair_shutters_l-mg', 'Flair_shutters_l-rd', 'Flair_shutters_l-yl', 'Flair_thicknerd', 'Flair_xmen'];

	var avatarLayers = [bodyParts, headParts, mouthParts, faceParts, hairParts, flairParts];


	// onPageLoad: Main Function To Fire on Window Load
	// ----------------------------------------------------------------------------

/*
	function onPageLoad() {

	}
*/


	// generateAvatar: Character Generator
	// ----------------------------------------------------------------------------
	function generateAvatar() {


/*
		function hideShowStatic() {

			for (var i = 0; i < elAvatarImgs.length - 1; i++) {

				// elAvatarImgs[i + 1].style.visibility = "hidden";

				if (elAvatarImgs[i + 1].style.visibility === 'hidden') {
					elAvatarImgs[i + 1].style.visibility = 'visible';
				} else {
					elAvatarImgs[i + 1].style.visibility = 'hidden';
				}

			}

		}
*/

		// hideShowStatic();

		elAvatarImgs[0].style.visibility = 'visible';

		for (var i = 0; i < elAvatarImgs.length - 1; i++) {

			elAvatarImgs[i + 1].style.visibility = 'hidden';

		}

		for (var i = 0; i < avatarLayers.length; i++) {

			var currentPart   = avatarLayers[i],
				currentMax    = currentPart.length,
				currentPrefix = currentPart[0].substr(0, currentPart[0].indexOf('_')).toLowerCase();
				random        = Math.floor(Math.random() * currentMax),
				chosenSrc     = currentPart[random],
				targetImg     = elAvatarImgs[i + 1];

			// targetImg.style.display = 'none';
			targetImg.setAttribute('src', 'assets/img/player/' + currentPrefix + '/' + chosenSrc + '.png')

		}

		setTimeout(function() {

			// hideShowStatic();

			for (var i = 0; i < elAvatarImgs.length - 1; i++) {

				elAvatarImgs[i + 1].style.visibility = 'visible';

			}

			elAvatarImgs[0].style.visibility = 'hidden';

		}, 600);

	}



	// Helper: Fire Window Resize Event Upon Finish
	// ----------------------------------------------------------------------------
	var waitForFinalEvent = (function() {

		var timers = {};

		return function(callback, ms, uniqueId) {

			if (!uniqueId) {
				uniqueId = 'beefchimi'; // Don't call this twice without a uniqueId
			}

			if (timers[uniqueId]) {
				clearTimeout(timers[uniqueId]);
			}

			timers[uniqueId] = setTimeout(callback, ms);

		};

	})();


	// Initialize Primary Functions
	// ----------------------------------------------------------------------------

	// onPageLoad();


	elGenerate.addEventListener('click', function(e) {

		generateAvatar();

		e.preventDefault();

	}, false);



}, false);