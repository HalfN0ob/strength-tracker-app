(() => {
  const STORAGE_KEY = "sh_tracker_state_v2";
  const LEGACY_KEY = "sh_tracker_state_v1";

  const mk = (Name, Sets, MinReps, MaxReps, RestSec, Equip, Note) => ({
    Name, Sets, MinReps, MaxReps, RestSec, Equip, Note
  });

  const EXERCISE_LIBRARY = {
    "Chest": [
      mk("Weighted Dips", 2, 5, 8, 165, "dipbelt", "Slight forward lean for lower/mid chest."),
      mk("Barbell Bench Press", 3, 5, 8, 180, "barbell", "Controlled touch on mid-chest."),
      mk("Paused Barbell Bench Press", 3, 4, 6, 180, "barbell", "1-second pause on chest, explosive drive."),
      mk("Incline Barbell Press", 3, 6, 10, 165, "barbell", "Upper chest focus (30-deg bench)."),
      mk("Decline Bench Press", 3, 6, 10, 150, "barbell", "Lower chest emphasis."),
      mk("Flat DB Bench Press", 3, 8, 12, 135, "db", "Full ROM with dumbbells."),
      mk("Incline DB Press", 3, 8, 12, 135, "db", "Deep stretch at bottom, press smoothly."),
      mk("Decline DB Press", 3, 8, 12, 120, "db", "Lower chest with dumbbell control."),
      mk("DB Squeeze Press", 3, 8, 12, 105, "db", "Press dumbbells together throughout."),
      mk("DB Floor Press", 3, 8, 12, 120, "db", "Pause triceps lightly on floor."),
      mk("Smith Machine Incline Press", 3, 8, 12, 135, "barbell", "Stable upper chest overload."),
      mk("Machine Chest Press", 3, 8, 12, 120, "cable", "Controlled eccentric, full contraction."),
      mk("Cable Chest Fly", 2, 10, 15, 90, "cable", "Squeeze across chest with slight elbow bend."),
      mk("Low-to-High Cable Fly", 2, 10, 15, 90, "cable", "Upper chest clavicular fibers."),
      mk("High-to-Low Cable Fly", 2, 10, 15, 90, "cable", "Lower chest sweep."),
      mk("Pec Deck Machine Fly", 2, 10, 15, 90, "cable", "Keep shoulders down, squeeze inner chest."),
      mk("Incline DB Fly", 2, 10, 15, 90, "db", "Controlled deep stretch."),
      mk("Flat DB Fly", 2, 10, 15, 90, "db", "Wide arc, slight elbow bend."),
      mk("Weighted Push-Ups", 3, 8, 15, 105, "dipbelt", "Full chest-to-floor ROM."),
      mk("Deficit Push-Ups", 3, 10, 20, 90, "dipbelt", "Hands elevated for deeper chest stretch."),
      mk("Landmine Chest Press", 3, 8, 12, 105, "barbell", "Squeeze upper/inner chest at lockout.")
    ],
    "Back": [
      mk("Weighted Pull-Ups", 2, 5, 8, 165, "dipbelt", "Full dead hang to chin over bar."),
      mk("Neutral-Grip Pull-Ups", 3, 6, 10, 150, "dipbelt", "Shoulder-friendly lat & mid-back builder."),
      mk("Wide-Grip Pull-Ups", 3, 6, 10, 150, "dipbelt", "Upper lat width focus."),
      mk("Lat Pulldown", 3, 8, 12, 120, "cable", "Pull elbows down to ribs."),
      mk("Close-Grip / V-Bar Pulldown", 3, 8, 12, 120, "cable", "Deep lat stretch and lower lat drive."),
      mk("Underhand Lat Pulldown", 3, 8, 12, 120, "cable", "Supinated grip for lower lats."),
      mk("Single-Arm Cable Pulldown", 2, 10, 15, 90, "cable", "Drive elbow to hip, slight torso lean."),
      mk("Chest-Supported Incline DB Row", 2, 8, 12, 135, "db", "Keep chest glued to bench pad."),
      mk("Chest-Supported Machine Row", 3, 8, 12, 120, "cable", "Squeeze shoulder blades together."),
      mk("Barbell Bent-Over Row", 3, 6, 10, 150, "barbell", "Controlled pull to lower chest/abs."),
      mk("Pendlay Row", 3, 5, 8, 150, "barbell", "Dead-stop each rep from floor."),
      mk("T-Bar Row", 3, 6, 10, 150, "barbell", "Thick mid-back and lat builder."),
      mk("Meadows Row", 3, 8, 12, 105, "barbell", "Landmine single-arm row for lat stretch."),
      mk("Single-Arm DB Row", 3, 8, 12, 105, "db", "Pull hip-ward for lat focus."),
      mk("Close-Grip Cable Row", 3, 8, 12, 120, "cable", "Full protraction and squeeze."),
      mk("Wide-Grip Seated Cable Row", 3, 8, 12, 120, "cable", "Upper back, rhomboids & rear delts."),
      mk("Straight-Arm Cable Pulldown", 2, 10, 15, 90, "cable", "Pure lat isolation, keep arms straight."),
      mk("DB Pullover", 2, 10, 15, 90, "db", "Deep ribcage & lat stretch."),
      mk("Inverted / Bodyweight Row", 3, 10, 15, 90, "dipbelt", "Strict horizontal pull."),
      mk("Rack Pulls", 2, 5, 8, 180, "barbell", "Upper back & trap overload."),
      mk("Reverse Fly", 2, 8, 12, 105, "db", "Rear delts & upper back."),
      mk("Cable Face Pull", 2, 12, 15, 90, "cable", "Rear delts & external rotation.")
    ],
    "Shoulders": [
      mk("Overhead Press (Barbell)", 2, 5, 10, 165, "barbell", "Strict standing press."),
      mk("Seated Barbell Overhead Press", 3, 6, 10, 150, "barbell", "Strict front & side delt press."),
      mk("Push Press", 3, 5, 8, 165, "barbell", "Explosive leg drive, controlled eccentric."),
      mk("Seated DB Shoulder Press", 3, 8, 12, 135, "db", "Controlled descent to ear level."),
      mk("Standing Single-Arm DB Press", 3, 8, 12, 105, "db", "Core stability & unilateral press."),
      mk("Arnold Press", 3, 8, 12, 120, "db", "Front & side delts."),
      mk("Machine Shoulder Press", 3, 8, 12, 120, "cable", "Controlled reps near failure."),
      mk("Landmine Single-Arm Press", 3, 8, 12, 105, "barbell", "Arced press, shoulder-friendly."),
      mk("DB Lateral Raises", 2, 8, 12, 105, "db", "Side delts, lead with elbows."),
      mk("Seated DB Lateral Raises", 3, 10, 15, 90, "db", "Zero momentum, strict side delts."),
      mk("Cable Lateral Raises", 2, 10, 15, 90, "cable", "Constant tension on side delts."),
      mk("Leaning Cable Lateral Raise", 2, 12, 15, 75, "cable", "Extra stretch at bottom."),
      mk("DB Y-Raise (Incline Bench)", 2, 12, 15, 75, "db", "Side/rear delts & lower traps."),
      mk("EZ-Bar / Cable Upright Row", 3, 10, 15, 90, "barbell", "Wide grip to mid-chest for side delts."),
      mk("DB / Cable Front Raise", 2, 10, 15, 75, "db", "Anterior delts, controlled lower."),
      mk("Rear Delt Cable Fly", 2, 12, 15, 90, "cable", "Posterior delts."),
      mk("Reverse Pec Deck Fly", 3, 12, 15, 90, "cable", "Posterior delts without momentum."),
      mk("Barbell / DB Shrugs", 3, 10, 15, 90, "db", "Upper traps, pause at top."),
      mk("Cable Shrugs", 3, 12, 15, 75, "cable", "Constant trap tension.")
    ],
    "Biceps": [
      mk("Seated Incline DB Curl", 2, 8, 12, 105, "db", "Long-head stretch at bottom."),
      mk("Seated Incline Hammer Curl", 2, 8, 12, 105, "db", "Brachialis & forearm thickness."),
      mk("Standing Alternating DB Curl", 3, 8, 12, 90, "db", "Supinate wrist at top."),
      mk("Standing DB Hammer Curl", 3, 8, 12, 90, "db", "Neutral grip brachialis builder."),
      mk("Cross-Body Hammer Curl", 2, 10, 15, 75, "db", "Brachialis & brachioradialis focus."),
      mk("Barbell Curl", 3, 8, 12, 105, "barbell", "Strict form, no swinging."),
      mk("EZ-Bar Curl", 3, 8, 12, 105, "barbell", "Wrist-friendly heavy curl."),
      mk("EZ-Bar / DB Preacher Curl", 3, 8, 12, 90, "barbell", "Strict short-head tension, full stretch."),
      mk("Spider Curl", 2, 10, 15, 90, "db", "Chest on incline bench, peak squeeze."),
      mk("Cable Bicep Curl", 2, 10, 15, 90, "cable", "Constant tension."),
      mk("Bayesian Cable Curl", 2, 10, 15, 90, "cable", "Face away from pulley for deep stretch."),
      mk("High-Cable Overhead Curl", 2, 10, 15, 75, "cable", "Front double-biceps peak contraction."),
      mk("Rope Hammer Curl", 2, 10, 15, 90, "cable", "Neutral grip brachialis work."),
      mk("Concentration Curl", 2, 10, 15, 75, "db", "Peak contraction."),
      mk("Zottman Curl", 2, 10, 12, 90, "db", "Supinated up, pronated slow eccentric."),
      mk("Weighted Chin-Ups", 2, 5, 8, 165, "dipbelt", "Supinated grip for biceps & lats.")
    ],
    "Triceps": [
      mk("Cable Triceps Pushdown", 2, 8, 12, 105, "cable", "Lock elbows at sides."),
      mk("Rope Triceps Pushdown", 3, 10, 15, 90, "cable", "Flare rope apart at full lockout."),
      mk("V-Bar Triceps Pushdown", 3, 8, 12, 90, "cable", "Heavy lateral & medial head pushdown."),
      mk("Reverse-Grip Cable Pushdown", 2, 10, 15, 75, "cable", "Supinated grip for medial head."),
      mk("Overhead Cable Triceps Extension", 2, 10, 15, 90, "cable", "Long-head stretch."),
      mk("Single-Arm Overhead DB Extension", 2, 10, 15, 75, "db", "Deep behind-head stretch."),
      mk("Two-Arm Seated DB Overhead Ext", 3, 8, 12, 105, "db", "Keep elbows tucked forward."),
      mk("DB / Barbell Skullcrushers", 3, 8, 12, 105, "barbell", "Lower behind head for stretch."),
      mk("Incline EZ-Bar Skullcrushers", 3, 8, 12, 105, "barbell", "Extra long-head tension on incline."),
      mk("Close-Grip Bench Press", 3, 6, 10, 150, "barbell", "Heavy triceps compound."),
      mk("JM Press", 3, 6, 10, 135, "barbell", "Hybrid close-grip press & skullcrusher."),
      mk("Single-Arm Cable Pushdown", 2, 10, 15, 75, "cable", "Unilateral triceps focus."),
      mk("Cable Triceps Kickback", 2, 12, 15, 75, "cable", "Peak contraction in shortened position."),
      mk("Weighted Bench / Tricep Dips", 3, 8, 12, 120, "dipbelt", "Upright torso for triceps emphasis."),
      mk("DB Tate Press", 2, 10, 15, 90, "db", "Elbows flared, lower DBs to chest.")
    ],
    "Forearms": [
      mk("Cable Forearm Curl", 2, 8, 12, 75, "cable", "Controlled wrist flexion."),
      mk("DB Wrist Curl", 2, 12, 20, 60, "db", "Forearm flexors."),
      mk("Behind-the-Back Barbell Wrist Curl", 3, 12, 20, 60, "barbell", "Deep finger roll & flexor squeeze."),
      mk("DB / Barbell Reverse Wrist Curl", 2, 12, 20, 60, "db", "Forearm extensors."),
      mk("Reverse Barbell / EZ Curl", 2, 10, 15, 75, "barbell", "Brachioradialis & extensors."),
      mk("Reverse Cable Curl", 2, 10, 15, 75, "cable", "Constant tension on brachioradialis."),
      mk("Dead Hangs / Farmer's Carry", 2, 30, 60, 90, "db", "Grip strength (seconds)."),
      mk("Plate Pinch Hold", 2, 30, 60, 75, "db", "Thumb & crush grip endurance (sec)."),
      mk("Wrist Roller", 2, 2, 4, 90, "db", "Roll weight up & down slowly.")
    ],
    "Quads": [
      mk("Barbell Squat", 2, 5, 8, 180, "barbell", "Full depth, strong brace."),
      mk("Paused Barbell Squat", 3, 4, 6, 180, "barbell", "2-second pause in the hole."),
      mk("Front Squat", 3, 6, 10, 165, "barbell", "Upright torso, high quad focus."),
      mk("Hack Squat", 3, 8, 12, 150, "barbell", "Low foot placement for max knee flexion."),
      mk("Pendulum Squat", 3, 8, 12, 150, "barbell", "Deep quad stretch, controlled bottom."),
      mk("Leg Press", 3, 8, 15, 150, "barbell", "Full ROM without lower-back rounding."),
      mk("Bulgarian Split Squat", 3, 8, 12, 120, "db", "Unilateral quad & glute builder."),
      mk("Goblet Squat", 3, 10, 15, 105, "db", "Heels elevated for quad bias."),
      mk("DB Walking Lunges", 2, 10, 15, 105, "db", "Reps per leg."),
      mk("Reverse Lunges (DB / Barbell)", 3, 8, 12, 105, "db", "Knee-friendly unilateral leg work."),
      mk("Weighted Step-Ups", 3, 8, 12, 105, "db", "Control eccentric, drive through front heel."),
      mk("Leg Extension", 3, 10, 15, 90, "cable", "Pause 1s at top lockout."),
      mk("Single-Leg Extension", 2, 12, 15, 75, "cable", "Fix left/right quad imbalances."),
      mk("Sissy Squat / Heel-Elevated Squat", 2, 10, 15, 90, "db", "Deep knee flexion."),
      mk("Belt Squat", 3, 8, 12, 135, "dipbelt", "Zero spinal loading, pure leg work.")
    ],
    "Hamstrings & Glutes": [
      mk("RDL", 2, 5, 8, 165, "barbell", "Controlled hip hinge, neutral spine."),
      mk("DB Romanian Deadlift", 3, 8, 12, 135, "db", "Push hips back, stretch hamstrings."),
      mk("Single-Leg DB RDL", 2, 8, 12, 90, "db", "Unilateral hamstring & balance work."),
      mk("Stiff-Legged Deadlift", 3, 6, 10, 165, "barbell", "Bar close to shins, deep hamstring stretch."),
      mk("Conventional Deadlift", 2, 5, 6, 180, "barbell", "Full posterior chain."),
      mk("Sumo Deadlift", 2, 5, 6, 180, "barbell", "Wide stance, glutes, adductors & quads."),
      mk("Barbell Good Mornings", 3, 8, 12, 135, "barbell", "Controlled hinge, keep back flat."),
      mk("Barbell Hip Thrust", 3, 8, 12, 135, "barbell", "Pause 1s at top lockout."),
      mk("Single-Leg Hip Thrust", 2, 10, 15, 90, "db", "Unilateral glute lockout."),
      mk("Seated Leg Curl", 3, 10, 15, 90, "cable", "Best seated hamstring stretch."),
      mk("Lying Leg Curl", 3, 10, 15, 90, "cable", "Keep hips pressed into pad."),
      mk("Cable Pull-Through", 3, 10, 15, 90, "cable", "Glute & hamstring hinge."),
      mk("Nordic Hamstring Curl", 2, 5, 10, 120, "dipbelt", "Eccentric hamstring overload."),
      mk("45-Deg Back Extension", 3, 10, 15, 90, "db", "Round upper back slightly for glutes/hams."),
      mk("Reverse Hyperextension", 3, 12, 15, 90, "dipbelt", "Glutes, hamstrings & lower back.")
    ],
    "Calves": [
      mk("Standing Calf Raises", 2, 8, 12, 90, "db", "Stand on plate; pause 1-2s at bottom."),
      mk("Single-Leg DB Calf Raise", 2, 10, 15, 75, "db", "Unilateral calf work."),
      mk("Seated Calf Raises", 3, 12, 20, 75, "db", "Soleus focus."),
      mk("Leg Press Calf Raise", 3, 10, 15, 75, "barbell", "Straight knees, full stretch."),
      mk("Smith Machine Calf Raise", 3, 10, 15, 75, "barbell", "Heavy gastrocnemius overload."),
      mk("Donkey Calf Raise", 3, 10, 15, 75, "dipbelt", "Hinged hip for maximal calf stretch."),
      mk("Tibialis Raise", 2, 15, 25, 60, "db", "Lower-leg balance & shin strength.")
    ],
    "Abs & Core": [
      mk("Cable Ab Crunch", 2, 8, 12, 90, "cable", "Curl ribs toward pelvis."),
      mk("Hanging Leg Raise", 3, 8, 15, 90, "dipbelt", "Curl pelvis up at top."),
      mk("Hanging Knee Raise", 3, 10, 15, 75, "dipbelt", "Controlled pelvic tilt, no swinging."),
      mk("Captain's Chair Leg Raise", 3, 10, 15, 75, "dipbelt", "Strict lower-ab flexion."),
      mk("Decline Weighted Crunch", 3, 10, 15, 90, "db", "Hold plate/DB on chest."),
      mk("Ab Wheel Rollout", 3, 8, 15, 90, "dipbelt", "Keep core braced."),
      mk("Cable Woodchopper", 2, 10, 15, 75, "cable", "Obliques & rotation."),
      mk("Pallof Press", 2, 10, 15, 75, "cable", "Anti-rotation core stability."),
      mk("Weighted Russian Twist", 3, 12, 20, 60, "db", "Control rotation with plate/DB."),
      mk("Weighted Plank", 3, 30, 60, 75, "dipbelt", "Hold seconds, squeeze glutes & abs."),
      mk("Dragon Flag", 2, 5, 10, 120, "dipbelt", "Slow negative, keep body straight.")
    ],
    "Neck": [
      mk("Neck Curl", 1, 12, 20, 60, "neck", "Plate on forehead with towel."),
      mk("Neck Extension", 1, 12, 20, 60, "neck", "Plate on back of head with towel."),
      mk("Lateral Neck Flexion", 1, 12, 20, 60, "neck", "Side-lying plate + towel."),
      mk("Neck Harness Extension", 2, 12, 20, 60, "neck", "Seated hinged posture, controlled reps."),
      mk("4-Way Isometric Neck Hold", 2, 20, 30, 60, "neck", "Hand/band resistance (seconds)."),
      mk("Wrestler's Neck Bridge", 2, 15, 30, 75, "neck", "Controlled isometric hold (seconds).")
    ]
  };

  function buildDefaultPlan() {
    return {
      Id: "default_ul",
      Name: "Upper / Lower (2 On / 1 Off)",
      Days: [
        {
          Id: "upper_a", Name: "Upper A", IsRest: false,
          Exercises: [
            mk("Weighted Pull-Ups", 2, 5, 8, 165, "dipbelt", "Full dead hang to chin over bar."),
            mk("Weighted Dips", 2, 5, 8, 165, "dipbelt", "Slight forward lean; controlled depth."),
            mk("Chest-Supported Incline DB Row", 2, 8, 12, 135, "db", "Keep chest glued to bench pad."),
            mk("DB Lateral Raises", 2, 8, 12, 105, "db", "Controlled tempo."),
            mk("Reverse Fly", 2, 8, 12, 105, "db", "Rear delts & upper back."),
            mk("Seated Incline DB Curl", 2, 8, 12, 105, "db", "Full stretch at bottom."),
            mk("Cable Triceps Pushdown", 2, 8, 12, 105, "cable", "Lock elbows at sides."),
            mk("Neck Curl", 1, 12, 20, 60, "neck", "Plate on forehead with towel."),
            mk("Neck Extension", 1, 12, 20, 60, "neck", "Plate on back of head with towel.")
          ]
        },
        {
          Id: "lower_a", Name: "Lower A", IsRest: false,
          Exercises: [
            mk("Barbell Squat", 2, 5, 8, 180, "barbell", "Full depth, strong brace."),
            mk("RDL", 2, 5, 8, 165, "barbell", "Controlled hip hinge, neutral spine."),
            mk("Standing Calf Raises", 2, 8, 12, 90, "db", "Pause 1-2s in bottom stretch."),
            mk("Cable Ab Crunch", 2, 8, 12, 90, "cable", "Curl ribs toward pelvis.")
          ]
        },
        { Id: "rest_1", Name: "Rest Day", IsRest: true, Exercises: [] },
        {
          Id: "upper_b", Name: "Upper B", IsRest: false,
          Exercises: [
            mk("Weighted Dips", 2, 5, 8, 165, "dipbelt", "Controlled descent, strong lockout."),
            mk("Overhead Press (Barbell)", 2, 5, 10, 165, "barbell", "Tight core brace."),
            mk("Weighted Pull-Ups", 2, 5, 8, 165, "dipbelt", "Full range of motion."),
            mk("Chest-Supported Incline DB Row", 2, 8, 12, 135, "db", "Controlled pull and stretch."),
            mk("DB Lateral Raises", 2, 8, 12, 105, "db", "Controlled tempo."),
            mk("Seated Incline Hammer Curl", 2, 8, 12, 105, "db", "Brachialis & forearm thickness."),
            mk("Cable Triceps Pushdown", 2, 8, 12, 105, "cable", "Full lockout."),
            mk("Cable Forearm Curl", 2, 8, 12, 75, "cable", "Controlled wrist flexion."),
            mk("Neck Curl", 1, 12, 20, 60, "neck", "Plate on forehead with towel."),
            mk("Neck Extension", 1, 12, 20, 60, "neck", "Plate on back of head with towel.")
          ]
        },
        {
          Id: "lower_b", Name: "Lower B", IsRest: false,
          Exercises: [
            mk("RDL", 2, 5, 8, 180, "barbell", "Lead lift while fresh."),
            mk("Barbell Squat", 2, 5, 8, 165, "barbell", "Heavy, controlled work after RDLs."),
            mk("Standing Calf Raises", 2, 8, 12, 90, "db", "Full ROM with 1-2s pause at bottom."),
            mk("Cable Ab Crunch", 2, 8, 12, 90, "cable", "Curl ribs toward pelvis.")
          ]
        },
        { Id: "rest_2", Name: "Rest Day", IsRest: true, Exercises: [] }
      ]
    };
  }

  function defaultState() {
    const defPlan = buildDefaultPlan();
    return {
      currentDayIndex: 0,
      activePlanId: defPlan.Id,
      selectedGoal: "bulk",
      activityLevel: "moderate",
      customCalories: "2700",
      lastWeight: "71.0",
      lastBodyFat: "14.5",
      goalWeight: "78.0",
      savedMeals: [],
      plans: [defPlan],
      history: [],
      drafts: {}
    };
  }

  function normalizeState(s) {
    const base = defaultState();
    if (!s || typeof s !== "object") return base;
    if (!Array.isArray(s.plans) || s.plans.length === 0) s.plans = base.plans;
    if (!s.activePlanId || !s.plans.some((p) => p.Id === s.activePlanId)) s.activePlanId = s.plans[0].Id;
    if (typeof s.currentDayIndex !== "number" || s.currentDayIndex < 0) s.currentDayIndex = 0;
    s.selectedGoal = normalizeGoal(s.selectedGoal);
    s.activityLevel = normalizeActivity(s.activityLevel);
    if (!s.customCalories) s.customCalories = "2700";
    if (!s.lastWeight) s.lastWeight = "71.0";
    if (!s.lastBodyFat) s.lastBodyFat = "14.5";
    if (s.goalWeight == null) s.goalWeight = "78.0";
    if (!Array.isArray(s.savedMeals)) s.savedMeals = [];
    if (!Array.isArray(s.history)) s.history = [];
    if (!s.drafts || typeof s.drafts !== "object") s.drafts = {};
    return s;
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_KEY);
      if (raw) return normalizeState(JSON.parse(raw));
    } catch (_) {}
    return defaultState();
  }

  let state = loadState();
  let editingPlanId = state.activePlanId;
  let editingDayIdx = 0;
  let selectedMuscleGroup = "Chest";
  let libraryQuery = "";

  const IS_LOCAL_HOST = location.hostname === "localhost" || location.hostname === "127.0.0.1";
  let syncDebounce = null;

  function saveState(syncMarkdown = false) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_) {}
    if (!IS_LOCAL_HOST) return;
    const send = () =>
      fetch("/api/state", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ state, syncMarkdown })
      }).catch(() => {});
    clearTimeout(syncDebounce);
    if (syncMarkdown) send();
    else syncDebounce = setTimeout(send, 400);
  }

  async function initServerSync() {
    if (!IS_LOCAL_HOST) return;
    try {
      const res = await fetch("/api/state");
      if (res.ok) {
        const data = await res.json();
        if (data && data.exists && data.state) {
          state = normalizeState(data.state);
          editingPlanId = state.activePlanId;
          localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
          renderAll();
        }
      }
    } catch (_) {}
  }

  // Helpers
  function todayIso() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }

  function parseWeight(v) {
    const n = parseFloat(String(v).replace(",", "."));
    return !isFinite(n) || n < 35 || n > 200 ? 71.0 : n;
  }

  function parseBodyFat(v) {
    const n = parseFloat(String(v).replace(",", "."));
    return !isFinite(n) || n < 5 || n > 45 ? 14.5 : n;
  }

  function normalizeGoal(g) {
    return g === "cut" || g === "maintain" || g === "bulk" || g === "custom" ? g : "bulk";
  }

  function goalDisplayName(g) {
    const n = normalizeGoal(g);
    if (n === "cut") return "Cut";
    if (n === "maintain") return "Maintain";
    if (n === "custom") return "Custom";
    return "Lean Bulk";
  }

  function normalizeActivity(a) {
    return a === "sedentary" || a === "light" || a === "moderate" || a === "very" ? a : "moderate";
  }

  function getActivityMultiplier(a) {
    const n = normalizeActivity(a);
    if (n === "sedentary") return 1.2;
    if (n === "light") return 1.375;
    if (n === "very") return 1.725;
    return 1.55;
  }

  function getProteinBounds(weightStr, bfStr, goalMode) {
    const lbm = parseWeight(weightStr) * (1 - parseBodyFat(bfStr) / 100);
    const g = normalizeGoal(goalMode);
    const low = Math.round(lbm * (g === "cut" ? 2.5 : 2.2));
    const high = Math.round(lbm * (g === "cut" ? 2.8 : 2.5));
    return [low, high];
  }

  function getCalorieBounds(weightStr, bfStr, goalMode) {
    const g = normalizeGoal(goalMode);
    if (g === "custom") {
      let c = parseInt(state.customCalories, 10);
      if (!isFinite(c) || c < 800 || c > 10000) c = 2700;
      return [c, c];
    }
    const lbm = parseWeight(weightStr) * (1 - parseBodyFat(bfStr) / 100);
    const tdee = (370 + 21.6 * lbm) * getActivityMultiplier(state.activityLevel);
    let dLow = 250, dHigh = 350;
    if (g === "cut") { dLow = -450; dHigh = -350; }
    else if (g === "maintain") { dLow = -50; dHigh = 50; }
    const low = Math.round((tdee + dLow) / 50) * 50;
    const high = Math.round((tdee + dHigh) / 50) * 50;
    return [low, high];
  }

  function getGoalEstimateText(weightStr, bfStr, goalWeightStr, goalMode) {
    const curW = parseWeight(weightStr);
    const bf = parseBodyFat(bfStr);
    const goalW = parseFloat(String(goalWeightStr).replace(",", "."));
    if (!isFinite(goalW) || goalW < 35 || goalW > 200) {
      return "Enter a Goal Weight (kg) to see timeline & BF% estimate.";
    }
    const diff = goalW - curW;
    const lbm = curW * (1 - bf / 100);
    if (Math.abs(diff) < 0.2) {
      return `At goal weight (${curW.toFixed(1)} kg • ~${bf.toFixed(1)}% BF)!`;
    }
    const g = normalizeGoal(goalMode);
    if (g === "maintain") {
      return `Goal: ${goalW.toFixed(1)} kg (${diff > 0 ? "+" : ""}${diff.toFixed(1)} kg) • Switch to Cut, Bulk, or Custom for timeline.`;
    }
    const fmtEta = (wks) => {
      const d = new Date(Date.now() + wks * 7 * 86400000);
      return d.toLocaleDateString(undefined, { month: "short", year: "numeric" });
    };
    if (g === "custom") {
      const c = parseInt(state.customCalories, 10);
      if (!isFinite(c) || c < 800 || c > 10000) return "Enter valid Custom Daily kcal (800-10000).";
      const tdee = (370 + 21.6 * lbm) * getActivityMultiplier(state.activityLevel);
      const dailyDelta = c - tdee;
      if (Math.abs(dailyDelta) < 25) {
        return `Goal: ${goalW.toFixed(1)} kg • ${c} kcal ≈ TDEE (~${Math.round(tdee)}) — adjust kcal.`;
      }
      if (diff < 0 && dailyDelta > 0) {
        return `Lose ${Math.abs(diff).toFixed(1)} kg • ${c} kcal is +${Math.round(dailyDelta)} above TDEE (~${Math.round(tdee)}) — lower kcal.`;
      }
      if (diff > 0 && dailyDelta < 0) {
        return `Gain ${diff.toFixed(1)} kg • ${c} kcal is ${Math.round(dailyDelta)} below TDEE (~${Math.round(tdee)}) — raise kcal.`;
      }
      const weeklyRate = (Math.abs(dailyDelta) * 7) / 7700;
      const weeks = Math.abs(diff) / weeklyRate;
      if (diff < 0) {
        const estBf = Math.max(6, (1 - lbm / goalW) * 100);
        return `Lose ${Math.abs(diff).toFixed(1)} kg • ~${Math.ceil(weeks)} wks (${fmtEta(weeks)}) at ${weeklyRate.toFixed(2)} kg/wk • Est. ${estBf.toFixed(1)}% BF`;
      } else {
        const newLbm = lbm + diff * 0.65;
        const estBf = Math.min(35, (1 - newLbm / goalW) * 100);
        return `Gain ${diff.toFixed(1)} kg • ~${Math.ceil(weeks)} wks (${fmtEta(weeks)}) at ${weeklyRate.toFixed(2)} kg/wk • Est. ${estBf.toFixed(1)}% BF`;
      }
    }
    if (diff < 0) {
      const weeks = Math.abs(diff) / 0.4;
      const estBf = Math.max(6, (1 - lbm / goalW) * 100);
      const note = g === "bulk" ? " (switch to Cut)" : "";
      return `Lose ${Math.abs(diff).toFixed(1)} kg • ~${Math.ceil(weeks)} wks (${fmtEta(weeks)})${note} • Est. ${estBf.toFixed(1)}% BF`;
    } else {
      const weeks = diff / 0.3;
      const newLbm = lbm + diff * 0.65;
      const estBf = Math.min(35, (1 - newLbm / goalW) * 100);
      const note = g === "cut" ? " (switch to Bulk)" : "";
      return `Gain ${diff.toFixed(1)} kg • ~${Math.ceil(weeks)} wks (${fmtEta(weeks)})${note} • Est. ${estBf.toFixed(1)}% BF`;
    }
  }

  function getActivePlan() {
    let plan = state.plans.find((p) => p.Id === state.activePlanId);
    if (!plan) {
      plan = state.plans[0];
      state.activePlanId = plan.Id;
    }
    if (!Array.isArray(plan.Days) || plan.Days.length === 0) {
      plan.Days = [{ Id: "day_1", Name: "Workout 1", IsRest: false, Exercises: [] }];
    }
    if (state.currentDayIndex < 0 || state.currentDayIndex >= plan.Days.length) {
      state.currentDayIndex = 0;
    }
    return plan;
  }

  function getEditingPlan() {
    let plan = state.plans.find((p) => p.Id === editingPlanId);
    if (!plan) {
      plan = getActivePlan();
      editingPlanId = plan.Id;
    }
    if (!Array.isArray(plan.Days)) plan.Days = [];
    if (editingDayIdx >= plan.Days.length) editingDayIdx = Math.max(0, plan.Days.length - 1);
    return plan;
  }

  function getLastExerciseLog(exName) {
    for (let i = state.history.length - 1; i >= 0; i--) {
      const s = state.history[i];
      if (s.exercises && Array.isArray(s.exercises[exName]) && s.exercises[exName].length > 0) {
        return { date: s.date, sets: s.exercises[exName] };
      }
    }
    return null;
  }

  function getTopPR(exName) {
    let bestW = 0, bestR = 0;
    for (const s of state.history) {
      const sets = s.exercises && s.exercises[exName];
      if (!Array.isArray(sets)) continue;
      for (const st of sets) {
        const w = parseFloat(st.weight);
        const r = parseInt(st.reps, 10) || 0;
        if (isFinite(w) && (w > bestW || (w === bestW && r > bestR))) {
          bestW = w;
          bestR = r;
        }
      }
    }
    return bestW > 0 ? { weight: bestW, reps: bestR } : null;
  }

  function draftKey(plan, day) {
    return `${plan.Id}::${day.Id}`;
  }

  function getOrCreateDraft(plan, day) {
    const key = draftKey(plan, day);
    if (!state.drafts[key]) {
      const d = {
        bodyweight: state.lastWeight,
        bodyFat: state.lastBodyFat,
        goalMode: state.selectedGoal,
        sleep: "8.0",
        proteinHit: true,
        meals: [],
        notes: "",
        restChecks: [],
        exercises: {}
      };
      if (Array.isArray(day.Exercises)) {
        for (const ex of day.Exercises) {
          const last = getLastExerciseLog(ex.Name);
          const sets = [];
          const count = Math.max(1, ex.Sets || 2);
          for (let i = 0; i < count; i++) {
            const prevW = last && last.sets[i] ? last.sets[i].weight : "";
            sets.push({ weight: prevW || "", reps: "", done: false });
          }
          d.exercises[ex.Name] = sets;
        }
      }
      state.drafts[key] = d;
    }
    const draft = state.drafts[key];
    if (!draft.bodyweight) draft.bodyweight = state.lastWeight;
    if (!draft.bodyFat) draft.bodyFat = state.lastBodyFat;
    if (!Array.isArray(draft.meals)) draft.meals = [];
    if (!Array.isArray(draft.restChecks)) draft.restChecks = [];
    if (!draft.exercises) draft.exercises = {};
    if (Array.isArray(day.Exercises)) {
      for (const ex of day.Exercises) {
        const target = Math.max(1, ex.Sets || 2);
        if (!Array.isArray(draft.exercises[ex.Name])) draft.exercises[ex.Name] = [];
        while (draft.exercises[ex.Name].length < target) {
          draft.exercises[ex.Name].push({ weight: "", reps: "", done: false });
        }
      }
    }
    return draft;
  }

  function stepForEquip(equip) {
    return equip === "db" || equip === "neck" ? 1.25 : 2.5;
  }

  // ===== REST TIMER =====
  let timerTotal = 165;
  let timerRemaining = 165;
  let timerRunning = false;
  let timerMuted = false;
  let timerInterval = null;

  const elTimerDisplay = document.getElementById("timerDisplay");
  const elTimerLabel = document.getElementById("timerLabel");
  const elTimerToggle = document.getElementById("timerToggleBtn");
  const elTimerProgress = document.getElementById("timerProgressFill");
  const elTimerWidget = document.getElementById("timerWidget");
  const elTimerMute = document.getElementById("timerMuteBtn");

  function fmtSec(s) {
    const m = Math.floor(s / 60);
    const r = s % 60;
    return `${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
  }

  function playBeep() {
    if (timerMuted) return;
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      [880, 1046].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.value = freq;
        gain.gain.value = 0.15;
        osc.connect(gain);
        gain.connect(ctx.destination);
        const start = ctx.currentTime + idx * 0.2;
        osc.start(start);
        osc.stop(start + 0.16);
      });
    } catch (_) {}
    if (navigator.vibrate) navigator.vibrate([180, 80, 180]);
  }

  function renderTimer() {
    elTimerDisplay.textContent = fmtSec(Math.max(0, timerRemaining));
    elTimerToggle.textContent = timerRunning ? "Pause" : "Start";
    const pct = timerTotal > 0 ? Math.max(0, Math.min(100, (timerRemaining / timerTotal) * 100)) : 0;
    elTimerProgress.style.width = `${pct}%`;
    elTimerMute.textContent = timerMuted ? "🔇" : "🔊";
    document.querySelectorAll(".preset-chip[data-sec]").forEach((btn) => {
      btn.classList.toggle("active", parseInt(btn.dataset.sec, 10) === timerTotal);
    });
  }

  function startRestTimer(sec, label = "Rest Timer") {
    clearInterval(timerInterval);
    timerTotal = Math.max(10, sec);
    timerRemaining = timerTotal;
    timerRunning = true;
    elTimerLabel.textContent = label;
    elTimerWidget.classList.remove("timer-done");
    renderTimer();
    timerInterval = setInterval(tickTimer, 1000);
  }

  function tickTimer() {
    if (!timerRunning) return;
    timerRemaining--;
    if (timerRemaining <= 0) {
      timerRemaining = 0;
      timerRunning = false;
      clearInterval(timerInterval);
      elTimerWidget.classList.add("timer-done");
      elTimerLabel.textContent = "Rest Done!";
      playBeep();
    }
    renderTimer();
  }

  document.getElementById("timerToggleBtn").addEventListener("click", () => {
    if (timerRunning) {
      timerRunning = false;
      clearInterval(timerInterval);
    } else {
      if (timerRemaining <= 0) timerRemaining = timerTotal;
      timerRunning = true;
      elTimerWidget.classList.remove("timer-done");
      clearInterval(timerInterval);
      timerInterval = setInterval(tickTimer, 1000);
    }
    renderTimer();
  });

  document.getElementById("timerMinusBtn").addEventListener("click", () => {
    timerRemaining = Math.max(0, timerRemaining - 15);
    renderTimer();
  });

  document.getElementById("timerPlusBtn").addEventListener("click", () => {
    timerRemaining += 15;
    if (timerRemaining > timerTotal) timerTotal = timerRemaining;
    elTimerWidget.classList.remove("timer-done");
    renderTimer();
  });

  document.getElementById("timerResetBtn").addEventListener("click", () => {
    timerRunning = false;
    clearInterval(timerInterval);
    timerRemaining = timerTotal;
    elTimerWidget.classList.remove("timer-done");
    elTimerLabel.textContent = "Rest Timer";
    renderTimer();
  });

  elTimerMute.addEventListener("click", () => {
    timerMuted = !timerMuted;
    renderTimer();
  });

  document.querySelectorAll(".preset-chip[data-sec]").forEach((btn) => {
    btn.addEventListener("click", () => startRestTimer(parseInt(btn.dataset.sec, 10), "Rest Timer"));
  });

  document.getElementById("timerSetCustomBtn").addEventListener("click", () => {
    const val = parseInt(document.getElementById("timerCustomSec").value, 10);
    if (isFinite(val) && val >= 10 && val <= 900) {
      startRestTimer(val, "Custom Rest");
    }
  });

  // ===== TABS =====
  document.querySelectorAll(".nav-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      document.querySelectorAll(".nav-tab").forEach((b) => b.classList.toggle("active", b === btn));
      document.querySelectorAll(".tab-panel").forEach((p) => p.classList.toggle("active", p.id === `tab-${tab}`));
      if (tab === "builder") renderPlanBuilder();
      if (tab === "history") renderHistory();
    });
  });

  // ===== RENAME MODAL =====
  const renameModal = document.getElementById("renameModal");
  const renameModalTitle = document.getElementById("renameModalTitle");
  const renameModalInput = document.getElementById("renameModalInput");
  let renameCallback = null;

  function openRenameModal(title, currentVal, onSave) {
    renameModalTitle.textContent = title;
    renameModalInput.value = currentVal || "";
    renameCallback = onSave;
    renameModal.classList.remove("hidden");
    setTimeout(() => {
      renameModalInput.focus();
      renameModalInput.select();
    }, 30);
  }

  function closeRenameModal() {
    renameModal.classList.add("hidden");
    renameCallback = null;
  }

  function confirmRenameModal() {
    const v = renameModalInput.value.trim();
    if (v && renameCallback) renameCallback(v);
    closeRenameModal();
  }

  document.getElementById("renameModalCancel").addEventListener("click", closeRenameModal);
  document.getElementById("renameModalSave").addEventListener("click", confirmRenameModal);
  renameModalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") confirmRenameModal();
    if (e.key === "Escape") closeRenameModal();
  });

  // ===== RENDER TODAY =====
  function renderToday() {
    const plan = getActivePlan();
    const day = plan.Days[state.currentDayIndex];
    const draft = getOrCreateDraft(plan, day);

    document.getElementById("activePlanHeader").textContent = `Active Plan: ${plan.Name} • Offline Mobile Ready`;
    document.getElementById("todayDateLabel").textContent = todayIso();

    // Cycle pills
    const cycleEl = document.getElementById("cycleSteps");
    cycleEl.innerHTML = "";
    plan.Days.forEach((d, idx) => {
      const btn = document.createElement("button");
      btn.className = `day-pill${d.IsRest ? " rest" : ""}${idx === state.currentDayIndex ? " active" : ""}`;
      btn.textContent = `Day ${idx + 1}: ${d.Name}`;
      btn.addEventListener("click", () => {
        state.currentDayIndex = idx;
        saveState(false);
        renderToday();
      });
      cycleEl.appendChild(btn);
    });

    // Main Workout / Rest Day
    const mainEl = document.getElementById("workoutMain");
    mainEl.innerHTML = "";

    if (day.IsRest) {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<h2>${escapeHtml(day.Name)} — Recovery Checklist</h2><p class="helper-text">Focus on sleep, hitting your protein &amp; calorie targets, and light movement.</p>`;
      const items = [
        "Sleep 7.5–9 hours for optimal recovery",
        `Hit daily protein (${getProteinBounds(draft.bodyweight, draft.bodyFat, state.selectedGoal).join("-")}g)`,
        "Log morning bodyweight & meals",
        "Light walk / mobility work"
      ];
      const list = document.createElement("div");
      list.className = "rest-checklist";
      items.forEach((txt, idx) => {
        const lbl = document.createElement("label");
        lbl.className = "rest-check-item";
        const cb = document.createElement("input");
        cb.type = "checkbox";
        cb.checked = draft.restChecks.includes(idx);
        cb.addEventListener("change", () => {
          if (cb.checked && !draft.restChecks.includes(idx)) draft.restChecks.push(idx);
          else if (!cb.checked) draft.restChecks = draft.restChecks.filter((x) => x !== idx);
          saveState(false);
        });
        lbl.appendChild(cb);
        lbl.appendChild(document.createTextNode(txt));
        list.appendChild(lbl);
      });
      card.appendChild(list);
      mainEl.appendChild(card);
    } else if (!day.Exercises || day.Exercises.length === 0) {
      mainEl.innerHTML = `<div class="card"><h2>${escapeHtml(day.Name)}</h2><p class="helper-text">No exercises in this day yet. Open <strong>Plan Builder</strong> to add exercises.</p></div>`;
    } else {
      day.Exercises.forEach((ex) => {
        const sets = draft.exercises[ex.Name] || [];
        const step = stepForEquip(ex.Equip);
        const pr = getTopPR(ex.Name);
        const last = getLastExerciseLog(ex.Name);

        const card = document.createElement("div");
        card.className = "exercise-card";

        const head = document.createElement("div");
        head.className = "ex-header";
        const left = document.createElement("div");
        left.innerHTML = `<div class="ex-title">${escapeHtml(ex.Name)}</div>`;
        const meta = document.createElement("div");
        meta.className = "ex-meta";
        meta.innerHTML = `<span class="badge">${ex.Sets} sets × ${ex.MinReps}-${ex.MaxReps} reps</span><span class="badge">Rest ${fmtSec(ex.RestSec || 120)}</span>`;
        if (pr) meta.innerHTML += `<span class="badge badge-pr">PR: ${pr.weight} kg × ${pr.reps}</span>`;
        if (last) {
          const summary = last.sets.map((s) => `${s.weight || 0}×${s.reps || 0}`).join(", ");
          meta.innerHTML += `<span class="badge">Last: ${escapeHtml(summary)}</span>`;
        }
        left.appendChild(meta);

        const restBtn = document.createElement("button");
        restBtn.className = "btn-secondary btn-xs";
        restBtn.textContent = `⏱ ${fmtSec(ex.RestSec || 120)}`;
        restBtn.addEventListener("click", () => startRestTimer(ex.RestSec || 120, ex.Name));

        head.appendChild(left);
        head.appendChild(restBtn);
        card.appendChild(head);

        if (ex.Note) {
          const note = document.createElement("div");
          note.className = "ex-note";
          note.textContent = ex.Note;
          card.appendChild(note);
        }

        const table = document.createElement("div");
        table.className = "sets-table";

        sets.forEach((st, sIdx) => {
          const row = document.createElement("div");
          row.className = `set-row${st.done ? " done" : ""}`;

          const num = document.createElement("div");
          num.className = "set-num";
          num.textContent = `Set ${sIdx + 1}`;

          const stepper = document.createElement("div");
          stepper.className = "stepper-wrap";
          const btnMinus = document.createElement("button");
          btnMinus.type = "button";
          btnMinus.className = "stepper-btn";
          btnMinus.textContent = `-${step}`;
          const wInp = document.createElement("input");
          wInp.type = "number";
          wInp.step = String(step);
          wInp.inputMode = "decimal";
          wInp.placeholder = "kg";
          wInp.value = st.weight || "";
          const btnPlus = document.createElement("button");
          btnPlus.type = "button";
          btnPlus.className = "stepper-btn";
          btnPlus.textContent = `+${step}`;

          const adjustW = (delta) => {
            const cur = parseFloat(wInp.value) || 0;
            const next = Math.max(0, Math.round((cur + delta) * 100) / 100);
            wInp.value = String(next);
            st.weight = String(next);
            saveState(false);
          };
          btnMinus.addEventListener("click", () => adjustW(-step));
          btnPlus.addEventListener("click", () => adjustW(step));
          wInp.addEventListener("input", () => {
            st.weight = wInp.value;
            saveState(false);
          });

          stepper.appendChild(btnMinus);
          stepper.appendChild(wInp);
          stepper.appendChild(btnPlus);

          const rInp = document.createElement("input");
          rInp.type = "number";
          rInp.className = "reps-input";
          rInp.inputMode = "numeric";
          rInp.placeholder = `${ex.MinReps}-${ex.MaxReps}`;
          rInp.value = st.reps || "";
          rInp.addEventListener("input", () => {
            st.reps = rInp.value;
            saveState(false);
          });

          const cb = document.createElement("input");
          cb.type = "checkbox";
          cb.className = "done-check";
          cb.checked = !!st.done;
          cb.addEventListener("change", () => {
            st.done = cb.checked;
            row.classList.toggle("done", st.done);
            saveState(false);
            if (st.done) startRestTimer(ex.RestSec || 120, `${ex.Name} (Set ${sIdx + 1})`);
          });

          row.appendChild(num);
          row.appendChild(stepper);
          row.appendChild(rInp);
          row.appendChild(cb);
          table.appendChild(row);
        });

        card.appendChild(table);
        mainEl.appendChild(card);
      });
    }

    renderSidebar(draft);
    renderQuickStats();
  }

  function renderSidebar(draft) {
    const setIfUnfocused = (id, val) => {
      const el = document.getElementById(id);
      if (document.activeElement !== el) el.value = val || "";
    };
    setIfUnfocused("inputBodyweight", draft.bodyweight);
    setIfUnfocused("inputBodyFat", draft.bodyFat);
    setIfUnfocused("inputSleep", draft.sleep);
    setIfUnfocused("inputGoalWeight", state.goalWeight);
    setIfUnfocused("inputCustomCals", state.customCalories);
    setIfUnfocused("inputSessionNotes", draft.notes);
    document.getElementById("inputProteinHit").checked = !!draft.proteinHit;
    updateNutritionUI(draft);
  }

  function updateNutritionUI(draft) {
    const g = normalizeGoal(state.selectedGoal);
    const a = normalizeActivity(state.activityLevel);
    const [pLow, pHigh] = getProteinBounds(draft.bodyweight, draft.bodyFat, g);
    const [cLow, cHigh] = getCalorieBounds(draft.bodyweight, draft.bodyFat, g);

    document.getElementById("proteinTargetLabel").textContent = `Hit ${pLow}-${pHigh}g Protein`;
    const calRangeStr = cLow === cHigh ? `${cLow} kcal` : `${cLow}-${cHigh} kcal`;
    const calBadge = document.getElementById("calorieTargetBadge");
    calBadge.textContent = `${goalDisplayName(g)}: ${calRangeStr} / day`;
    calBadge.style.color = g === "cut" ? "var(--amber)" : g === "maintain" ? "#93c5fd" : g === "custom" ? "var(--purple)" : "var(--emerald)";

    document.getElementById("goalEstimateBox").textContent = getGoalEstimateText(
      draft.bodyweight, draft.bodyFat, state.goalWeight, g
    );

    document.getElementById("customCalRow").classList.toggle("hidden", g !== "custom");

    document.querySelectorAll("#activityBtnGroup .pill-btn").forEach((btn) => {
      btn.className = `pill-btn${btn.dataset.act === a ? " active-blue" : ""}`;
    });

    document.querySelectorAll("#goalBtnGroup .pill-btn").forEach((btn) => {
      const active = btn.dataset.goal === g;
      const cls = g === "cut" ? "active-amber" : g === "maintain" ? "active-blue" : g === "custom" ? "active-purple" : "active-emerald";
      btn.className = `pill-btn${active ? " " + cls : ""}`;
    });

    // Meals & Macros
    const totalCal = draft.meals.reduce((acc, m) => acc + (parseInt(m.calories, 10) || 0), 0);
    const totalProt = draft.meals.reduce((acc, m) => acc + (parseInt(m.protein, 10) || 0), 0);
    const calTarget = Math.round((cLow + cHigh) / 2);
    const protTarget = Math.round((pLow + pHigh) / 2);

    document.getElementById("calSummaryText").textContent = `${totalCal} / ${calTarget} kcal`;
    document.getElementById("protSummaryText").textContent = `${totalProt} / ${protTarget}g protein`;
    document.getElementById("calProgressFill").style.width = `${Math.min(100, (totalCal / Math.max(1, calTarget)) * 100)}%`;
    document.getElementById("protProgressFill").style.width = `${Math.min(100, (totalProt / Math.max(1, protTarget)) * 100)}%`;

    // Saved Meals quick-add
    const savedEl = document.getElementById("savedMealsPanel");
    savedEl.innerHTML = "";
    state.savedMeals.forEach((sm, idx) => {
      const chip = document.createElement("div");
      chip.className = "saved-meal-chip";
      const txt = document.createElement("span");
      txt.textContent = `+ ${sm.name} (${sm.calories}kcal${sm.protein ? ` / ${sm.protein}g` : ""})`;
      txt.addEventListener("click", () => {
        draft.meals.push({ name: sm.name, calories: sm.calories, protein: sm.protein || 0 });
        saveState(false);
        updateNutritionUI(draft);
      });
      const del = document.createElement("button");
      del.className = "saved-meal-del";
      del.textContent = "×";
      del.addEventListener("click", (e) => {
        e.stopPropagation();
        state.savedMeals.splice(idx, 1);
        saveState(false);
        updateNutritionUI(draft);
      });
      chip.appendChild(txt);
      chip.appendChild(del);
      savedEl.appendChild(chip);
    });

    // Today's meals
    const listEl = document.getElementById("mealsListPanel");
    listEl.innerHTML = "";
    draft.meals.forEach((m, idx) => {
      const row = document.createElement("div");
      row.className = "meal-item";
      row.innerHTML = `<span>${escapeHtml(m.name)}</span><span class="meal-macros">${m.calories} kcal${m.protein ? ` • ${m.protein}g P` : ""}</span>`;
      const del = document.createElement("button");
      del.className = "btn-icon btn-xs";
      del.textContent = "×";
      del.addEventListener("click", () => {
        draft.meals.splice(idx, 1);
        saveState(false);
        updateNutritionUI(draft);
      });
      row.appendChild(del);
      listEl.appendChild(row);
    });
  }

  function renderQuickStats() {
    const el = document.getElementById("quickStatsList");
    el.innerHTML = "";
    const addRow = (k, v) => {
      const r = document.createElement("div");
      r.className = "stat-row";
      r.innerHTML = `<span>${escapeHtml(k)}</span><span class="stat-val">${escapeHtml(v)}</span>`;
      el.appendChild(r);
    };
    addRow("Sessions Logged", String(state.history.length));
    const plan = getActivePlan();
    const seen = new Set();
    const prs = [];
    for (const d of plan.Days) {
      if (d.IsRest || !d.Exercises) continue;
      for (const ex of d.Exercises) {
        if (seen.has(ex.Name)) continue;
        seen.add(ex.Name);
        const pr = getTopPR(ex.Name);
        if (pr) prs.push([ex.Name, `${pr.weight} kg × ${pr.reps}`]);
      }
    }
    if (prs.length === 0) {
      addRow("Top Lift PRs", "Log your first session!");
    } else {
      prs.slice(0, 6).forEach(([k, v]) => addRow(k, v));
    }
  }

  // Sidebar input bindings
  const onBodyChange = () => {
    const plan = getActivePlan();
    const day = plan.Days[state.currentDayIndex];
    const draft = getOrCreateDraft(plan, day);
    draft.bodyweight = document.getElementById("inputBodyweight").value;
    draft.bodyFat = document.getElementById("inputBodyFat").value;
    draft.sleep = document.getElementById("inputSleep").value;
    draft.proteinHit = document.getElementById("inputProteinHit").checked;
    draft.notes = document.getElementById("inputSessionNotes").value;
    if (draft.bodyweight.trim()) state.lastWeight = draft.bodyweight.trim();
    if (draft.bodyFat.trim()) state.lastBodyFat = draft.bodyFat.trim();
    state.goalWeight = document.getElementById("inputGoalWeight").value;
    const cVal = document.getElementById("inputCustomCals").value.trim();
    if (cVal) state.customCalories = cVal;
    updateNutritionUI(draft);
    saveState(false);
  };

  ["inputBodyweight", "inputBodyFat", "inputSleep", "inputGoalWeight", "inputCustomCals", "inputSessionNotes"].forEach((id) => {
    document.getElementById(id).addEventListener("input", onBodyChange);
  });
  document.getElementById("inputProteinHit").addEventListener("change", onBodyChange);

  document.querySelectorAll("#activityBtnGroup .pill-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.activityLevel = normalizeActivity(btn.dataset.act);
      const plan = getActivePlan();
      const draft = getOrCreateDraft(plan, plan.Days[state.currentDayIndex]);
      updateNutritionUI(draft);
      saveState(false);
    });
  });

  document.querySelectorAll("#goalBtnGroup .pill-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.selectedGoal = normalizeGoal(btn.dataset.goal);
      const plan = getActivePlan();
      const draft = getOrCreateDraft(plan, plan.Days[state.currentDayIndex]);
      draft.goalMode = state.selectedGoal;
      updateNutritionUI(draft);
      saveState(false);
    });
  });

  document.getElementById("addMealBtn").addEventListener("click", () => {
    const name = document.getElementById("inputMealName").value.trim() || "Meal";
    const cals = parseInt(document.getElementById("inputMealCals").value, 10);
    const prot = parseInt(document.getElementById("inputMealProtein").value, 10) || 0;
    if (!isFinite(cals) || cals <= 0) return;
    const plan = getActivePlan();
    const draft = getOrCreateDraft(plan, plan.Days[state.currentDayIndex]);
    draft.meals.push({ name, calories: cals, protein: prot });
    document.getElementById("inputMealName").value = "";
    document.getElementById("inputMealCals").value = "";
    document.getElementById("inputMealProtein").value = "";
    saveState(false);
    updateNutritionUI(draft);
  });

  document.getElementById("savePresetMealBtn").addEventListener("click", () => {
    const name = document.getElementById("inputMealName").value.trim();
    const cals = parseInt(document.getElementById("inputMealCals").value, 10);
    const prot = parseInt(document.getElementById("inputMealProtein").value, 10) || 0;
    if (!name || !isFinite(cals) || cals <= 0) return;
    state.savedMeals.push({ name, calories: cals, protein: prot });
    const plan = getActivePlan();
    const draft = getOrCreateDraft(plan, plan.Days[state.currentDayIndex]);
    saveState(false);
    updateNutritionUI(draft);
  });

  document.getElementById("saveSessionBtn").addEventListener("click", () => {
    const plan = getActivePlan();
    const day = plan.Days[state.currentDayIndex];
    const draft = getOrCreateDraft(plan, day);
    const totalCal = draft.meals.reduce((a, m) => a + (parseInt(m.calories, 10) || 0), 0);
    const totalProt = draft.meals.reduce((a, m) => a + (parseInt(m.protein, 10) || 0), 0);

    state.history.push({
      id: Date.now(),
      date: todayIso(),
      planName: plan.Name,
      dayId: day.Id,
      dayName: day.Name,
      isRest: !!day.IsRest,
      bodyweight: draft.bodyweight,
      bodyFat: draft.bodyFat,
      goalMode: state.selectedGoal,
      sleep: draft.sleep,
      proteinHit: draft.proteinHit,
      totalCalories: totalCal,
      totalProtein: totalProt,
      notes: draft.notes,
      exercises: JSON.parse(JSON.stringify(draft.exercises || {}))
    });

    delete state.drafts[draftKey(plan, day)];
    state.currentDayIndex = (state.currentDayIndex + 1) % plan.Days.length;
    saveState(true);
    renderToday();
    document.getElementById("saveStatusMsg").textContent = `Saved ${day.Name}! Advanced to Day ${state.currentDayIndex + 1}.`;
  });

  // ===== PLAN BUILDER =====
  function renderPlanBuilder() {
    const editPlan = getEditingPlan();

    // Plans list
    const plansEl = document.getElementById("builderPlansPanel");
    plansEl.innerHTML = "";
    state.plans.forEach((p) => {
      const isEditing = p.Id === editPlan.Id;
      const isActive = p.Id === state.activePlanId;
      const row = document.createElement("div");
      row.className = `builder-item${isEditing ? " selected" : ""}`;
      row.innerHTML = `<div><div class="builder-item-title">${escapeHtml(p.Name)}</div><div class="builder-item-sub${isActive ? " active-star" : ""}">${isActive ? "★ Active on Main Page" : `${p.Days.length} days`}</div></div>`;

      const acts = document.createElement("div");
      acts.className = "builder-actions";
      const renBtn = document.createElement("button");
      renBtn.className = "btn-icon btn-xs";
      renBtn.textContent = "✎";
      renBtn.title = "Rename plan";
      renBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        openRenameModal("Rename Plan", p.Name, (newName) => {
          p.Name = newName;
          saveState(false);
          renderPlanBuilder();
          renderToday();
          document.getElementById("builderStatusMsg").textContent = `Renamed plan to '${newName}'.`;
        });
      });
      acts.appendChild(renBtn);

      if (state.plans.length > 1) {
        const delBtn = document.createElement("button");
        delBtn.className = "btn-icon btn-xs";
        delBtn.textContent = "×";
        delBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          state.plans = state.plans.filter((x) => x.Id !== p.Id);
          if (state.activePlanId === p.Id) state.activePlanId = state.plans[0].Id;
          editingPlanId = state.activePlanId;
          editingDayIdx = 0;
          saveState(true);
          renderPlanBuilder();
          renderToday();
        });
        acts.appendChild(delBtn);
      }

      row.appendChild(acts);
      row.addEventListener("click", () => {
        editingPlanId = p.Id;
        editingDayIdx = 0;
        renderPlanBuilder();
      });
      plansEl.appendChild(row);
    });

    // Days list
    const daysEl = document.getElementById("builderDaysPanel");
    daysEl.innerHTML = "";
    editPlan.Days.forEach((d, idx) => {
      const sel = idx === editingDayIdx;
      const row = document.createElement("div");
      row.className = `builder-item${d.IsRest ? " rest" : ""}${sel ? " selected" : ""}`;
      row.innerHTML = `<div class="builder-item-title">Day ${idx + 1}: ${escapeHtml(d.Name)}</div>`;

      const acts = document.createElement("div");
      acts.className = "builder-actions";
      const renBtn = document.createElement("button");
      renBtn.className = "btn-icon btn-xs";
      renBtn.textContent = "✎";
      renBtn.title = "Rename day";
      renBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        openRenameModal(`Rename Day ${idx + 1}`, d.Name, (newName) => {
          d.Name = newName;
          saveState(false);
          renderPlanBuilder();
          renderToday();
          document.getElementById("builderStatusMsg").textContent = `Renamed Day ${idx + 1} to '${newName}'.`;
        });
      });
      acts.appendChild(renBtn);

      if (editPlan.Days.length > 1) {
        const delBtn = document.createElement("button");
        delBtn.className = "btn-icon btn-xs";
        delBtn.textContent = "×";
        delBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          editPlan.Days.splice(idx, 1);
          if (editingDayIdx >= editPlan.Days.length) editingDayIdx = editPlan.Days.length - 1;
          saveState(false);
          renderPlanBuilder();
        });
        acts.appendChild(delBtn);
      }

      row.appendChild(acts);
      row.addEventListener("click", () => {
        editingDayIdx = idx;
        renderPlanBuilder();
      });
      daysEl.appendChild(row);
    });

    // Exercises in selected day
    const dayExEl = document.getElementById("builderDayExercisesPanel");
    dayExEl.innerHTML = "";
    if (editPlan.Days.length > 0) {
      const curDay = editPlan.Days[editingDayIdx];
      if (curDay.IsRest) {
        dayExEl.innerHTML = `<p class="helper-text">${escapeHtml(curDay.Name)} is a Rest Day. Select a Workout Day to edit exercises.</p>`;
      } else if (!curDay.Exercises || curDay.Exercises.length === 0) {
        dayExEl.innerHTML = `<p class="helper-text">No exercises yet. Tap <strong>+ Add</strong> from the Exercise Library.</p>`;
      } else {
        curDay.Exercises.forEach((ex, exIdx) => {
          const row = document.createElement("div");
          row.className = "builder-ex-row";
          row.innerHTML = `<div><div class="library-row-name">${escapeHtml(ex.Name)}</div><div class="library-row-meta">${ex.Sets} sets × ${ex.MinReps}-${ex.MaxReps} reps • Rest ${fmtSec(ex.RestSec || 120)}</div></div>`;
          const acts = document.createElement("div");
          acts.className = "builder-actions";

          if (exIdx > 0) {
            const up = document.createElement("button");
            up.className = "btn-icon btn-xs";
            up.textContent = "↑";
            up.addEventListener("click", () => {
              [curDay.Exercises[exIdx - 1], curDay.Exercises[exIdx]] = [curDay.Exercises[exIdx], curDay.Exercises[exIdx - 1]];
              saveState(false);
              renderPlanBuilder();
            });
            acts.appendChild(up);
          }
          if (exIdx < curDay.Exercises.length - 1) {
            const dn = document.createElement("button");
            dn.className = "btn-icon btn-xs";
            dn.textContent = "↓";
            dn.addEventListener("click", () => {
              [curDay.Exercises[exIdx + 1], curDay.Exercises[exIdx]] = [curDay.Exercises[exIdx], curDay.Exercises[exIdx + 1]];
              saveState(false);
              renderPlanBuilder();
            });
            acts.appendChild(dn);
          }
          const del = document.createElement("button");
          del.className = "btn-icon btn-xs";
          del.textContent = "×";
          del.addEventListener("click", () => {
            curDay.Exercises.splice(exIdx, 1);
            saveState(false);
            renderPlanBuilder();
          });
          acts.appendChild(del);

          row.appendChild(acts);
          dayExEl.appendChild(row);
        });
      }
    }

    // Muscle Group Pills
    const pillsEl = document.getElementById("muscleGroupPills");
    pillsEl.innerHTML = "";
    Object.keys(EXERCISE_LIBRARY).forEach((grp) => {
      const btn = document.createElement("button");
      btn.className = `muscle-pill${!libraryQuery && grp === selectedMuscleGroup ? " active" : ""}`;
      btn.textContent = grp;
      btn.addEventListener("click", () => {
        selectedMuscleGroup = grp;
        libraryQuery = "";
        document.getElementById("librarySearchInput").value = "";
        renderPlanBuilder();
      });
      pillsEl.appendChild(btn);
    });

    // Library exercises
    const libEl = document.getElementById("libraryExercisesPanel");
    libEl.innerHTML = "";
    let list = [];
    if (libraryQuery) {
      const q = libraryQuery.toLowerCase();
      Object.entries(EXERCISE_LIBRARY).forEach(([grp, arr]) => {
        arr.forEach((ex) => {
          if (ex.Name.toLowerCase().includes(q) || grp.toLowerCase().includes(q) || (ex.Note || "").toLowerCase().includes(q)) {
            list.push({ ...ex, _grp: grp });
          }
        });
      });
    } else {
      list = (EXERCISE_LIBRARY[selectedMuscleGroup] || []).map((ex) => ({ ...ex, _grp: selectedMuscleGroup }));
    }

    list.forEach((ex) => {
      const row = document.createElement("div");
      row.className = "library-row";
      row.innerHTML = `<div><div class="library-row-name">${escapeHtml(ex.Name)}</div><div class="library-row-meta">${ex.Sets}×${ex.MinReps}-${ex.MaxReps} • ${escapeHtml(ex.Note || ex._grp)}</div></div>`;
      const addBtn = document.createElement("button");
      addBtn.className = "btn-primary btn-xs";
      addBtn.textContent = "+ Add";
      addBtn.addEventListener("click", () => addExerciseToEditingDay(ex));
      row.appendChild(addBtn);
      libEl.appendChild(row);
    });
  }

  function addExerciseToEditingDay(tpl) {
    const p = getEditingPlan();
    if (!p.Days.length) return;
    const day = p.Days[editingDayIdx];
    if (day.IsRest) {
      document.getElementById("builderStatusMsg").textContent = "Select a Workout Day (not a Rest Day) to add exercises.";
      return;
    }
    if (!Array.isArray(day.Exercises)) day.Exercises = [];
    day.Exercises.push({
      Name: tpl.Name,
      Sets: tpl.Sets,
      MinReps: tpl.MinReps,
      MaxReps: tpl.MaxReps,
      RestSec: tpl.RestSec || 120,
      Equip: tpl.Equip || "db",
      Note: tpl.Note || ""
    });
    saveState(false);
    renderPlanBuilder();
    document.getElementById("builderStatusMsg").textContent = `Added '${tpl.Name}' to ${day.Name}.`;
  }

  document.getElementById("createPlanBtn").addEventListener("click", () => {
    const inp = document.getElementById("inputNewPlanName");
    const name = inp.value.trim() || `Custom Plan ${state.plans.length + 1}`;
    const p = {
      Id: `plan_${Date.now()}`,
      Name: name,
      Days: [{ Id: "d1", Name: "Day 1 Workout", IsRest: false, Exercises: [] }]
    };
    state.plans.push(p);
    editingPlanId = p.Id;
    editingDayIdx = 0;
    inp.value = "";
    saveState(false);
    renderPlanBuilder();
    document.getElementById("builderStatusMsg").textContent = `Created '${name}'.`;
  });

  const addDay = (isRest) => {
    const p = getEditingPlan();
    const inp = document.getElementById("inputNewDayName");
    const name = inp.value.trim() || (isRest ? "Rest Day" : `Workout ${p.Days.length + 1}`);
    p.Days.push({ Id: `day_${Date.now()}`, Name: name, IsRest: isRest, Exercises: [] });
    editingDayIdx = p.Days.length - 1;
    inp.value = "";
    saveState(false);
    renderPlanBuilder();
  };
  document.getElementById("addWorkDayBtn").addEventListener("click", () => addDay(false));
  document.getElementById("addRestDayBtn").addEventListener("click", () => addDay(true));

  document.getElementById("saveActivatePlanBtn").addEventListener("click", () => {
    const p = getEditingPlan();
    state.activePlanId = p.Id;
    state.currentDayIndex = 0;
    saveState(true);
    renderToday();
    renderPlanBuilder();
    document.getElementById("builderStatusMsg").textContent = `Saved '${p.Name}' and set as active plan!`;
  });

  document.getElementById("librarySearchInput").addEventListener("input", (e) => {
    libraryQuery = e.target.value.trim();
    renderPlanBuilder();
  });

  document.getElementById("addCustomExBtn").addEventListener("click", () => {
    const name = document.getElementById("inputCustomExName").value.trim();
    if (!name) return;
    const sets = Math.max(1, parseInt(document.getElementById("inputCustomSets").value, 10) || 3);
    const minR = Math.max(1, parseInt(document.getElementById("inputCustomMinReps").value, 10) || 8);
    const maxR = Math.max(minR, parseInt(document.getElementById("inputCustomMaxReps").value, 10) || minR + 4);
    addExerciseToEditingDay(mk(name, sets, minR, maxR, 120, "db", ""));
    document.getElementById("inputCustomExName").value = "";
  });

  // ===== HISTORY & BACKUP =====
  function renderHistory() {
    const el = document.getElementById("historyList");
    el.innerHTML = "";
    if (!state.history.length) {
      el.innerHTML = `<div class="card"><p class="helper-text">No sessions logged yet. Save your first workout on the Today tab.</p></div>`;
      return;
    }
    [...state.history].reverse().forEach((s) => {
      const card = document.createElement("div");
      card.className = "history-card";
      const head = document.createElement("div");
      head.className = "history-head";
      head.innerHTML = `<div><strong>${escapeHtml(s.date)} — ${escapeHtml(s.dayName)}</strong> <span class="helper-text">(${escapeHtml(s.planName || "")})</span></div>`;
      const del = document.createElement("button");
      del.className = "btn-icon btn-xs";
      del.textContent = "Delete";
      del.addEventListener("click", () => {
        state.history = state.history.filter((x) => x.id !== s.id);
        saveState(true);
        renderHistory();
        renderQuickStats();
      });
      head.appendChild(del);
      card.appendChild(head);

      const meta = document.createElement("div");
      meta.className = "ex-meta";
      meta.innerHTML = `<span class="badge">BW: ${escapeHtml(s.bodyweight || "-")} kg</span><span class="badge">BF: ${escapeHtml(s.bodyFat || "-")}%</span><span class="badge">Sleep: ${escapeHtml(s.sleep || "-")}h</span>`;
      if (s.totalCalories) meta.innerHTML += `<span class="badge">${s.totalCalories} kcal${s.totalProtein ? ` • ${s.totalProtein}g P` : ""}</span>`;
      card.appendChild(meta);

      if (s.exercises && Object.keys(s.exercises).length > 0) {
        const exList = document.createElement("div");
        exList.className = "history-ex-list";
        Object.entries(s.exercises).forEach(([exName, sets]) => {
          const txt = (sets || []).map((st) => `${st.weight || 0}kg×${st.reps || 0}`).join(" | ");
          const row = document.createElement("div");
          row.innerHTML = `<strong>${escapeHtml(exName)}:</strong> ${escapeHtml(txt)}`;
          exList.appendChild(row);
        });
        card.appendChild(exList);
      }
      if (s.notes) {
        const n = document.createElement("p");
        n.className = "helper-text";
        n.style.marginTop = "6px";
        n.textContent = `Notes: ${s.notes}`;
        card.appendChild(n);
      }
      el.appendChild(card);
    });
  }

  document.getElementById("copyMarkdownBtn").addEventListener("click", () => {
    const md = state.history.map((s) => {
      const lines = [`### ${s.date} — ${s.dayName} (${s.planName || ""})`, `- BW: ${s.bodyweight || "-"} kg | BF: ${s.bodyFat || "-"}% | Sleep: ${s.sleep || "-"}h`];
      if (s.exercises) {
        Object.entries(s.exercises).forEach(([k, sets]) => {
          lines.push(`- **${k}:** ${(sets || []).map((st) => `${st.weight || 0}kg×${st.reps || 0}`).join(", ")}`);
        });
      }
      if (s.notes) lines.push(`- Notes: ${s.notes}`);
      return lines.join("\n");
    }).join("\n\n---\n\n");
    navigator.clipboard.writeText(md || "No sessions logged yet.").then(() => alert("Copied Markdown to clipboard!")).catch(() => {});
  });

  document.getElementById("exportJsonBtn").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `strength-tracker-backup-${todayIso()}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  });

  document.getElementById("importJsonInput").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        state = normalizeState(JSON.parse(reader.result));
        editingPlanId = state.activePlanId;
        saveState(true);
        renderAll();
        alert("Backup imported successfully!");
      } catch (_) {
        alert("Invalid JSON backup file.");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  });

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderAll() {
    renderTimer();
    renderToday();
    renderPlanBuilder();
    renderHistory();
  }

  // Register Service Worker for offline iPhone/Android PWA
  if ("serviceWorker" in navigator && (location.protocol === "https:" || IS_LOCAL_HOST)) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
  }

  renderAll();
  initServerSync();
})();
