// src/constants/categoryKeywords.js

// Enhanced Smart Category & Department Assignment System - Keywords Database
export const CATEGORY_KEYWORDS = Object.freeze({
'Emergency': {
    subcategories: [
        {
            name: 'Critical Emergencies',
            keywords: [
                // Medical Emergencies
                'medical emergency', 'heart attack', 'stroke', 'unconscious', 'bleeding', 'fracture',
                'serious injury', 'life threatening', 'critical condition', 'ambulance', 'hospital',
                'doctor needed', 'first aid', 'oxygen', 'ventilator', 'ICU', 'cardiac arrest',
                'breathing difficulty', 'chest pain', 'severe pain', 'internal injury', 'head injury',
                'spinal injury', 'burns', 'electric shock', 'poisoning', 'overdose', 'allergic reaction',
                'anaphylaxis', 'seizure', 'epilepsy', 'diabetic emergency', 'low blood sugar',
                'high blood pressure', 'fainting', 'collapsed', 'vomiting blood', 'severe dehydration',
                'heat stroke', 'hypothermia', 'pregnancy emergency', 'delivery', 'miscarriage',
                'psychiatric emergency', 'suicide attempt', 'self harm', 'mental breakdown',
                
                // Fire Emergencies (based on Railway Fire SOP)
                'fire', 'fire in train', 'coach on fire', 'smoke', 'electrical fire', 'short circuit fire',
                'gas leak', 'explosion', 'blast', 'burning smell', 'flames', 'fire extinguisher needed',
                'evacuation needed', 'smoke inhalation', 'fire hazard', 'combustible material',
                'pantry car fire', 'power car fire', 'engine fire', 'brake fire', 'wheel fire',
                'electrical equipment fire', 'air conditioning fire', 'wiring fire', 'battery fire',
                'fire suppression system', 'automatic fire detection', 'fire alarm triggered',
                
                // Train Accidents and Collisions
                'train derailment', 'derailed', 'collision', 'train accident', 'coaches overturned',
                'signal failure', 'track obstruction', 'train crash', 'engine failure', 'brake failure',
                'coupling failure', 'wheel breakage', 'axle failure', 'pantograph damage',
                'overhead wire damage', 'electrocution', 'electric wire contact', 'power line contact',
                'buffer collision', 'rear end collision', 'head on collision', 'side collision',
                
                // Security and Terrorist Threats
                'bomb threat', 'terrorist threat', 'suspicious package', 'unattended bag',
                'explosive device', 'security alert', 'hijack', 'hostage situation', 'armed person',
                'weapon threat', 'knife attack', 'gun threat', 'violence', 'mass panic',
                'CBRN threat', 'chemical threat', 'biological threat', 'radiological threat',
                'nuclear threat', 'toxic gas release', 'chemical spill', 'hazardous material',
                
                // Missing Persons and Child Emergencies
                'child missing', 'passenger missing', 'person missing', 'lost child', 'kidnapping',
                'abduction', 'human trafficking', 'unaccompanied minor emergency', 'child in danger',
                
                // Infrastructure Emergencies
                'platform collapse', 'building collapse', 'roof collapse', 'bridge failure',
                'tunnel collapse', 'track washout', 'embankment failure', 'signal system failure',
                'communication system failure', 'power system failure', 'complete blackout',
                
                // Urgent Help Keywords
                'emergency', 'urgent help', 'critical', 'help needed', 'immediate assistance',
                'SOS', 'mayday', 'distress call', 'rescue needed', 'trapped', 'stuck',
                'evacuation', 'emergency evacuation', 'abandon train', 'emergency stop',
                'emergency chain pulled', 'alarm chain activated', 'emergency brake applied',
                
                // Mass Casualty Events
                'mass casualty', 'multiple injuries', 'multiple fatalities', 'disaster',
                'major accident', 'catastrophic event', 'large scale emergency',
                'crowd stampede', 'passenger stampede', 'panic situation', 'mass evacuation',
                
                // Accident Relief and Response
                'accident relief train', 'ART', 'accident relief medical van', 'ARMV',
                'emergency response team', 'rescue team', 'medical team', 'fire brigade',
                'disaster management', 'crisis management', 'emergency services',
                'NDRF', 'national disaster response force', 'emergency coordination',
                
                // Equipment and System Failures
                'door stuck with passengers', 'passenger trapped', 'lift breakdown with passengers',
                'escalator accident', 'emergency equipment failure', 'communication breakdown',
                'ventilation failure with passengers', 'air conditioning failure emergency',
                
                // Environmental Emergencies
                'toxic gas exposure', 'carbon monoxide poisoning', 'air quality emergency',
                'radiation leak', 'chemical contamination', 'biological contamination',
                'water contamination emergency', 'food poisoning outbreak'
            ],
            departments: ['Emergency Response Team']
        },
        {
            name: 'Natural Disasters',
            keywords: [
                // Weather-Related Disasters
                'flood', 'flooding', 'flash flood', 'river flood', 'waterlogging', 'inundation',
                'heavy rain', 'torrential rain', 'downpour', 'cloudburst', 'monsoon flooding',
                'cyclone', 'hurricane', 'typhoon', 'tropical storm', 'severe storm', 'wind storm',
                'thunderstorm', 'lightning storm', 'hailstorm', 'dust storm', 'sandstorm',
                'drought', 'extreme heat', 'heatwave', 'cold wave', 'winter storm', 'blizzard',
                
                // Geological Disasters
                'earthquake', 'seismic activity', 'tremor', 'aftershock', 'ground shaking',
                'landslide', 'mudslide', 'rockslide', 'slope failure', 'hillside collapse',
                'avalanche', 'rock fall', 'boulder fall', 'cliff collapse', 'soil erosion',
                'ground subsidence', 'sinkhole', 'geological instability',
                
                // Water-Related Disasters
                'tsunami', 'tidal wave', 'storm surge', 'river erosion', 'embankment breach',
                'dam burst', 'reservoir overflow', 'canal breach', 'coastal erosion',
                'sea level rise', 'high tide emergency', 'flash flooding',
                
                // Infrastructure Damage from Natural Causes
                'bridge collapse', 'bridge damage', 'bridge washout', 'bridge swept away',
                'track damage', 'track washout', 'track submersion', 'track displacement',
                'track buckling', 'rail damage', 'sleeper damage', 'ballast washout',
                'embankment failure', 'cutting collapse', 'retaining wall failure',
                'platform damage', 'station damage', 'roof damage', 'structural damage',
                
                // Communication and Power Infrastructure
                'overhead line damage', 'power line down', 'electrical infrastructure damage',
                'signal system damage', 'telecommunication failure', 'communication tower damage',
                'substation damage', 'power grid failure', 'total power outage',
                
                // Emergency Response Requirements
                'evacuation', 'emergency evacuation', 'passenger evacuation', 'mass evacuation',
                'rescue', 'rescue operation', 'relief operation', 'emergency relief',
                'stranded', 'stranded passengers', 'stranded train', 'isolated area',
                'cut off routes', 'inaccessible areas', 'blocked routes', 'route closure',
                
                // Service Disruptions
                'service disruption', 'traffic disruption', 'route closure', 'line closure',
                'service suspension', 'train cancellation due to weather', 'service diversion',
                'alternate route needed', 'emergency route', 'restoration work required',
                
                // Seasonal and Climate-Related
                'monsoon disaster', 'seasonal flooding', 'winter emergency', 'summer emergency',
                'climate disaster', 'extreme weather event', 'weather warning', 'weather alert',
                'visibility zero', 'dense fog', 'poor visibility', 'weather disruption',
                
                // Fire-Related Natural Disasters
                'forest fire', 'wildfire', 'grass fire', 'bush fire', 'vegetation fire',
                'fire spread to tracks', 'smoke affecting visibility', 'fire evacuation',
                
                // Vulnerability Assessment Areas (based on search results)
                'earthquake prone area', 'flood prone area', 'cyclone prone area',
                'landslide prone area', 'drought affected area', 'tsunami vulnerable coast',
                'avalanche risk area', 'seismic zone emergency', 'disaster risk area',
                
                // Climate Change Impact
                'climate change emergency', 'extreme precipitation', 'unprecedented weather',
                'record breaking storm', 'climate-induced disaster', 'environmental emergency',
                'ecosystem collapse', 'environmental degradation emergency',
                
                // Multi-hazard Situations
                'multiple disasters', 'cascading disasters', 'compound emergency',
                'simultaneous emergencies', 'disaster chain', 'secondary disasters',
                'post-disaster complications', 'disaster amplification',
                
                // Response Infrastructure
                'disaster management team', 'emergency coordination center', 'relief camp',
                'temporary shelter', 'emergency accommodation', 'disaster relief',
                'humanitarian aid', 'emergency supplies', 'disaster assessment team',
                
                // Recovery and Restoration
                'disaster recovery', 'post-disaster restoration', 'infrastructure rebuilding',
                'emergency repair', 'temporary restoration', 'service restoration',
                'normal operations resumption', 'disaster rehabilitation'
            ],
            departments: ['Operations Emergency Team']
        }
    ],
    priority: 'critical',
    confidence: 0.92
},


'Safety & Security': {
    subcategories: [
        {
            name: 'Security Threats',
            keywords: [
                // Theft and Robbery
                'theft', 'robbery', 'pickpocket', 'chain snatching', 'bag stolen', 'mobile stolen',
                'phone theft', 'mobile phone stolen', 'gold chain stolen', 'jewelry stolen',
                'wallet stolen', 'purse stolen', 'luggage theft', 'baggage theft', 'suitcase stolen',
                'laptop stolen', 'tablet stolen', 'cash stolen', 'money stolen', 'valuables stolen',
                'pickpocketing', 'snatching', 'mugging', 'looting', 'burglary', 'stealing',
                'stolen goods', 'lost property', 'missing items', 'property theft',
                
                // Violent Crimes
                'robbery', 'armed robbery', 'dacoity', 'gang robbery', 'train robbery',
                'violence', 'fight', 'assault', 'attack', 'beating', 'hitting', 'stabbing',
                'knife attack', 'blade attack', 'weapon attack', 'armed attack',
                'gang violence', 'mob violence', 'group attack', 'lynching',
                
                // Weapons and Threats
                'weapon', 'knife', 'blade', 'gun', 'pistol', 'revolver', 'firearm',
                'sharp weapon', 'cutting weapon', 'country made pistol', 'illegal weapon',
                'weapon threat', 'armed person', 'dangerous weapon', 'explosive device',
                
                // Security Threats
                'security threat', 'security breach', 'security concern', 'security alert',
                'suspicious person', 'suspicious activity', 'suspicious behavior', 'suspicious movement',
                'suspicious package', 'unattended bag', 'abandoned luggage', 'suspicious object',
                'unknown person', 'stranger danger', 'infiltration', 'unauthorized entry',
                
                // Terrorism and Extremism
                'terrorist', 'terrorism', 'terrorist threat', 'extremist', 'radical',
                'bomb threat', 'explosive threat', 'sabotage', 'anti-national activity',
                'hostile activity', 'subversive activity', 'threat to security',
                'national security', 'internal security', 'public safety threat',
                
                // Criminal Activities
                'criminal', 'criminal activity', 'crime', 'illegal activity', 'unlawful act',
                'gang activity', 'organized crime', 'mafia', 'criminal gang',
                'drug dealing', 'drug trafficking', 'narcotics', 'contraband',
                'smuggling', 'illegal trade', 'black market', 'counterfeit goods',
                
                // Harassment and Misconduct
                'harassment', 'intimidation', 'threatening', 'blackmail', 'extortion',
                'abuse', 'verbal abuse', 'physical abuse', 'mental harassment',
                'bullying', 'rowdy behavior', 'antisocial behavior', 'nuisance',
                
                // Cyber Security Threats
                'cyber crime', 'cyber attack', 'hacking', 'phishing', 'identity theft',
                'credit card fraud', 'online fraud', 'digital fraud', 'cyber threat',
                'data breach', 'privacy violation', 'unauthorized access',
                
                // Specific Railway Security Issues
                'signal tampering', 'track sabotage', 'railway sabotage', 'infrastructure damage',
                'vandalism', 'property damage', 'equipment damage', 'railway security',
                'platform security', 'station security', 'train security', 'coach security',
                
                // Gang and Group Crimes
                'gang', 'criminal gang', 'organized gang', 'train gang', 'thief gang',
                'group crime', 'mass crime', 'coordinated attack', 'planned crime',
                'repeat offender', 'habitual criminal', 'professional thief',
                
                // Specific Theft Locations
                'compartment theft', 'berth theft', 'toilet theft', 'platform theft',
                'station theft', 'waiting room theft', 'food court theft', 'parking theft',
                
                // Time-based Crimes
                'night crime', 'midnight theft', 'early morning crime', 'rush hour crime',
                'festival season crime', 'holiday crime', 'peak season theft',
                
                // Passenger Targeting
                'senior citizen targeting', 'women targeting', 'tourist targeting',
                'pilgrim targeting', 'business traveler targeting', 'family targeting',
                'single traveler risk', 'vulnerable passenger', 'easy target',
                
                // Security Response
                'security alert', 'emergency response', 'immediate help', 'urgent security',
                'police needed', 'RPF needed', 'security personnel', 'guard needed',
                'CCTV footage', 'surveillance', 'investigation', 'complaint registration',
                
                // Prevention and Awareness
                'safety precaution', 'security awareness', 'travel safety', 'passenger safety',
                'crime prevention', 'safety measure', 'security protocol', 'vigilance',
                
                // Specific Railway Crimes
                'train stopping crime', 'false alarm', 'emergency chain misuse',
                'ticket fraud', 'identity fraud', 'fake identity', 'impersonation',
                'unauthorized travel', 'ticketless travel', 'fare evasion'
            ],
            departments: ['RPF Security Team']
        },
        {
            name: 'Women Safety',
            keywords: [
                // Sexual Harassment and Misconduct
                'harassment', 'sexual harassment', 'woman safety', 'women safety', 'female safety',
                'sexual misconduct', 'eve teasing', 'stalking', 'following', 'chasing',
                'inappropriate touching', 'unwanted touching', 'touching without consent',
                'molestation', 'sexual assault', 'rape', 'attempt to rape', 'sexual abuse',
                'indecent behavior', 'obscene gestures', 'vulgar behavior', 'lewd behavior',
                'sexual advances', 'unwanted advances', 'forced advances',
                
                // Verbal Harassment
                'catcalling', 'whistling', 'passing comments', 'vulgar comments', 'dirty talk',
                'sexual comments', 'indecent remarks', 'abusive language', 'obscene words',
                'teasing', 'name calling', 'verbal abuse', 'offensive language',
                'suggestive remarks', 'inappropriate jokes', 'sexist comments',
                
                // Physical Harassment
                'groping', 'grabbing', 'pinching', 'pushing', 'shoving', 'blocking path',
                'cornering', 'trapping', 'restraining', 'holding forcefully',
                'unwanted physical contact', 'touching inappropriately', 'brushing against',
                'deliberately bumping', 'invasion of personal space',
                
                // Visual Harassment
                'staring', 'leering', 'ogling', 'peeping', 'voyeurism', 'taking photos',
                'recording videos', 'filming without consent', 'clicking pictures',
                'inappropriate photography', 'video recording', 'mobile camera misuse',
                'peeking', 'watching', 'observing inappropriately',
                
                // Technology-based Harassment
                'sending inappropriate messages', 'WhatsApp harassment', 'phone harassment',
                'calling repeatedly', 'messaging inappropriately', 'sharing contact details',
                'social media harassment', 'cyber stalking', 'online harassment',
                
                // Compartment and Coach Related
                'ladies compartment', 'women coach', 'ladies coach', 'female compartment',
                'general compartment safety', 'mixed compartment', 'ladies only',
                'reserved for women', 'women exclusive', 'female only section',
                'compartment violation', 'men in ladies coach', 'unauthorized entry',
                
                // Location Specific Issues
                'platform harassment', 'station harassment', 'toilet harassment',
                'washroom safety', 'restroom incident', 'waiting room safety',
                'berth safety', 'upper berth safety', 'lower berth incident',
                'corridor harassment', 'aisle incident', 'door area harassment',
                
                // Time-based Concerns
                'night travel safety', 'late night harassment', 'early morning incident',
                'overnight journey', 'sleeping harassment', 'midnight incident',
                'dawn harassment', 'dark hours safety', 'night shift travel',
                
                // Staff Related Issues
                'TTE harassment', 'staff misbehavior', 'conductor misconduct',
                'railway employee harassment', 'ticket checker harassment',
                'catering staff behavior', 'cleaning staff issue', 'security guard problem',
                'railway personnel misconduct', 'official harassment',
                
                // Discrimination and Rights
                'gender discrimination', 'gender bias', 'women rights violation',
                'equal treatment', 'fair treatment', 'discrimination based on gender',
                'prejudice', 'unfair behavior', 'biased treatment',
                
                // Safety Services and Support
                'meri saheli', 'yatri mitra', 'women helpline', 'safety helpline',
                'emergency help for women', 'women assistance', 'female police',
                'women support', 'safety escort', 'protective service',
                'women security', 'safety patrol', 'women patrol team',
                
                // Emergency Situations
                'women emergency', 'female emergency', 'safety emergency',
                'urgent help for women', 'immediate assistance', 'rescue needed',
                'help needed', 'SOS women', 'emergency call', 'distress call',
                
                // Pregnancy and Maternity Related
                'pregnant woman safety', 'maternity safety', 'expecting mother',
                'pregnant lady harassment', 'prenatal safety', 'pregnancy emergency',
                'pregnant woman assistance', 'maternity compartment',
                
                // Age-specific Concerns
                'young girl safety', 'teenage girl', 'minor girl safety',
                'elderly woman safety', 'senior citizen woman', 'old lady safety',
                'college girl safety', 'working woman safety',
                
                // Travel Patterns
                'solo female travel', 'alone woman travel', 'single woman passenger',
                'unaccompanied woman', 'women traveling alone', 'female solo journey',
                'independent travel', 'business woman travel',
                
                // Specific Crimes
                'chain snatching women', 'robbery of women', 'theft from women',
                'pickpocketing women', 'bag snatching', 'purse theft',
                'jewelry theft', 'mobile theft from women',
                
                // Psychological Impact
                'feeling unsafe', 'fear', 'anxiety', 'uncomfortable', 'threatened',
                'intimidated', 'scared', 'worried about safety', 'nervous',
                'mental harassment', 'psychological abuse', 'emotional distress',
                
                // Reporting and Documentation
                'complaint against harassment', 'FIR for harassment', 'police complaint',
                'incident report', 'harassment complaint', 'safety complaint',
                'women grievance', 'sexual harassment complaint', 'misconduct report',
                
                // Prevention and Awareness
                'safety awareness', 'women safety tips', 'travel safety for women',
                'safety precautions', 'security measures', 'protective measures',
                'safety guidelines', 'women empowerment', 'self defense'
            ],
            departments: ['Women Safety Cell']
        },
        {
            name: 'General Safety',
            keywords: [
                // General Safety Concerns
                'safety concern', 'unsafe', 'danger', 'risk', 'hazard', 'accident prone',
                'safety issue', 'safety problem', 'safety violation', 'safety breach',
                'safety protocol', 'safety measure', 'safety procedure', 'safety standard',
                'unsafe conditions', 'dangerous situation', 'risky behavior', 'hazardous',
                'precarious', 'perilous', 'safety awareness', 'safety compliance',
                
                // Safety Equipment and Systems
                'safety equipment', 'emergency chain', 'alarm chain', 'emergency brake',
                'safety chain', 'chain pulling', 'emergency stop', 'alarm system',
                'fire extinguisher', 'fire alarm', 'smoke detector', 'emergency light',
                'safety gear', 'protective equipment', 'safety devices', 'warning system',
                'safety signage', 'emergency exit', 'safety instructions', 'safety manual',
                
                // Security Personnel and Forces
                'guard', 'RPF', 'Railway Protection Force', 'police', 'security guard',
                'security personnel', 'railway police', 'GRP', 'Government Railway Police',
                'CISF', 'security officer', 'safety officer', 'train guard', 'station guard',
                'patrolling', 'security patrol', 'beat patrol', 'night patrol',
                
                // Surveillance and Monitoring
                'CCTV', 'surveillance', 'security camera', 'monitoring', 'video surveillance',
                'camera footage', 'recording', 'security monitoring', 'observation',
                'watching', 'supervision', 'oversight', 'security check',
                
                // Investigation and Reporting
                'investigation', 'inquiry', 'probe', 'examination', 'inspection',
                'safety audit', 'safety inspection', 'incident report', 'accident investigation',
                'safety report', 'compliance check', 'verification', 'assessment',
                
                // Train Operation Safety (based on search results)
                'KAVACH system', 'train collision avoidance system', 'TCAS', 'automatic train protection',
                'signal failure', 'signal problem', 'red signal', 'signal malfunction',
                'SPAD', 'signal passed at danger', 'speed limit', 'overspeeding',
                'brake failure', 'brake problem', 'coupling failure', 'derailment risk',
                'track safety', 'track condition', 'track defect', 'rail break',
                'joint failure', 'sleeper damage', 'ballast problem', 'gauge variation',
                
                // Platform and Station Safety
                'platform safety', 'platform gap', 'mind the gap', 'platform edge',
                'falling from platform', 'slip and fall', 'wet platform', 'slippery surface',
                'crowd control', 'stampede risk', 'overcrowding', 'rush hour safety',
                'queue management', 'passenger flow', 'boarding safety', 'alighting safety',
                
                // Infrastructure Safety
                'bridge safety', 'tunnel safety', 'overhead wire', 'electrical safety',
                'electrocution risk', 'power line safety', 'voltage', 'electric shock',
                'grounding', 'earthing', 'insulation', 'electrical hazard',
                'structural safety', 'building safety', 'construction safety',
                
                // Level Crossing Safety
                'level crossing', 'railway crossing', 'grade crossing', 'unmanned crossing',
                'manned crossing', 'crossing gate', 'boom barrier', 'warning bell',
                'crossing accident', 'road rail interface', 'crossing safety',
                
                // Fire and Emergency Safety
                'fire safety', 'fire hazard', 'fire risk', 'fire prevention',
                'emergency evacuation', 'evacuation procedure', 'fire drill',
                'emergency response', 'disaster management', 'crisis management',
                'contingency plan', 'emergency preparedness', 'rescue operation',
                
                // Personal Safety
                'personal safety', 'passenger safety', 'traveler safety', 'journey safety',
                'travel safety', 'commuter safety', 'public safety', 'individual safety',
                'safety tips', 'safety guidelines', 'safety precautions', 'safety advice',
                
                // Environmental Safety
                'environmental safety', 'air quality', 'ventilation', 'toxic fumes',
                'gas leak', 'chemical hazard', 'radiation', 'noise pollution',
                'sound levels', 'hearing protection', 'respiratory safety',
                
                // Weather Related Safety
                'weather safety', 'monsoon safety', 'flood safety', 'cyclone safety',
                'storm safety', 'lightning safety', 'fog safety', 'visibility',
                'extreme weather', 'weather alert', 'seasonal safety',
                
                // Equipment Safety
                'equipment failure', 'machinery safety', 'mechanical failure',
                'maintenance safety', 'operational safety', 'system failure',
                'technical fault', 'equipment malfunction', 'device failure',
                
                // Training and Awareness
                'safety training', 'safety education', 'safety drill', 'safety workshop',
                'safety program', 'awareness campaign', 'safety orientation',
                'safety briefing', 'safety demonstration', 'safety practice',
                
                // Documentation and Compliance
                'safety certificate', 'safety clearance', 'safety permit', 'safety license',
                'safety regulation', 'safety law', 'safety act', 'safety rule',
                'safety policy', 'safety guideline', 'safety document',
                
                // Emergency Situations
                'emergency situation', 'crisis situation', 'urgent situation',
                'immediate danger', 'imminent threat', 'emergency alert',
                'distress signal', 'help needed', 'assistance required',
                
                // Accident Prevention
                'accident prevention', 'injury prevention', 'mishap prevention',
                'incident prevention', 'safety intervention', 'preventive measure',
                'risk mitigation', 'hazard control', 'safety barrier',
                
                // Technology Safety (based on search results)
                'ATP', 'automatic train protection', 'train collision avoidance',
                'TCAS', 'kavach system', 'anti collision device', 'safety technology',
                'modern safety system', 'advanced safety feature', 'vigilance control device',
                'fog safety device', 'GPS based safety', 'real time monitoring',
                
                // Communication Safety
                'communication failure', 'radio failure', 'intercom failure',
                'announcement system', 'public address system', 'emergency communication',
                'safety communication', 'alert system', 'warning system',
                
                // Maintenance Safety
                'maintenance work', 'repair work', 'construction work', 'work safety',
                'worker safety', 'maintenance safety', 'track work', 'overhead work',
                'safety during maintenance', 'work zone safety'
            ],
            departments: ['RPF Security Team']
        },
        {
            name: 'Child Safety',
            keywords: [
                // General Child Safety (based on search results)
                'child safety', 'minor', 'unaccompanied child', 'child abuse', 'kidnapping',
                'lost child', 'missing child', 'child trafficking', 'child protection',
                'child welfare', 'child security', 'vulnerable child', 'child at risk',
                'child in distress', 'child emergency', 'child rescue', 'child help',
                
                // Age-based Terms
                'minor', 'juvenile', 'infant', 'baby', 'toddler', 'kid', 'teenager',
                'adolescent', 'young child', 'small child', 'underage', 'below 18',
                'child passenger', 'child traveler', 'school child', 'student',
                
                // Missing and Lost Children
                'missing child', 'lost child', 'disappeared child', 'runaway child',
                'absconding child', 'child not found', 'searching for child',
                'child went missing', 'child lost in station', 'child separated',
                'child alone', 'child without parents', 'child without guardian',
                
                // Unaccompanied Children (based on search results)
                'unaccompanied child', 'unaccompanied minor', 'child traveling alone',
                'solo child travel', 'child without adult', 'independent child',
                'child boarding alone', 'child found alone', 'abandoned child',
                'child left behind', 'child stranded', 'homeless child', 'street child',
                
                // Child Labor and Exploitation
                'child labor', 'child labour', 'child worker', 'working child',
                'child exploitation', 'child trafficking', 'human trafficking',
                'child begging', 'child beggar', 'forced child labor',
                'child domestic worker', 'child maid', 'child servant',
                'child forced to work', 'child slavery', 'bonded child labor',
                
                // Abuse and Violence
                'child abuse', 'child molestation', 'child sexual abuse',
                'child physical abuse', 'child mental abuse', 'child harassment',
                'child violence', 'violence against child', 'child beating',
                'child torture', 'child cruelty', 'inhuman treatment of child',
                'child neglect', 'child abandonment', 'child maltreatment',
                
                // Specific Railway Context
                'child on platform', 'child in train', 'child at station',
                'child fell from train', 'child accident', 'child injury',
                'child between coaches', 'child on track', 'child near railway',
                'child climbing train', 'child playing near train',
                
                // Family Separation
                'family separation', 'separated from family', 'lost parents',
                'parents missing', 'guardian missing', 'child with stranger',
                'child with unknown person', 'suspicious adult with child',
                'child custody', 'parental dispute', 'family conflict',
                
                // Child Help and Support (based on search results)
                'child help desk', 'child helpline', 'child support', 'child assistance',
                'child care', 'child protection services', 'child welfare committee',
                'CWC', 'CHILDLINE', 'child rescue team', 'child counseling',
                'child rehabilitation', 'child reintegration', 'family reunion',
                
                // Specific Operations (based on search results)
                'Operation Muskan', 'child rescue operation', 'anti-trafficking',
                'child protection drive', 'missing child search', 'child tracing',
                'child verification', 'child identification', 'child documentation',
                
                // Legal and Procedural (based on search results)
                'Juvenile Justice Act', 'JJ Act', 'child rights', 'POCSO Act',
                'child protection law', 'child welfare law', 'minor protection',
                'child court', 'child magistrate', 'child legal aid',
                'FIR for child', 'police complaint child', 'child case',
                
                // Institutional Care
                'child care institution', 'CCI', 'observation home', 'special home',
                'children home', 'shelter home', 'rescue home', 'child shelter',
                'orphanage', 'child hostel', 'child accommodation',
                'temporary care', 'foster care', 'adoption',
                
                // Specific Vulnerabilities
                'child with disability', 'special needs child', 'mentally challenged child',
                'physically disabled child', 'visually impaired child',
                'hearing impaired child', 'child with illness', 'sick child',
                'malnourished child', 'underweight child', 'child health',
                
                // Age-specific Concerns
                'infant safety', 'baby safety', 'toddler safety', 'preschool child',
                'school age child', 'teenage safety', 'adolescent safety',
                'newborn safety', 'child under 5', 'child under 12', 'child under 18',
                
                // Gender-specific Issues
                'girl child safety', 'boy child safety', 'female child',
                'male child', 'girl trafficking', 'girl child abuse',
                'girl child protection', 'child marriage', 'underage marriage',
                
                // Educational Context
                'school child', 'student safety', 'child education', 'school dropout',
                'child not in school', 'child skipping school', 'truant child',
                'educational neglect', 'child literacy', 'school transport',
                
                // Health and Nutrition
                'child health', 'child nutrition', 'child medical care',
                'child immunization', 'child vaccination', 'sick child',
                'child medical emergency', 'child first aid', 'child treatment',
                'child hospital', 'pediatric care', 'child doctor',
                
                // Psychological Issues
                'child trauma', 'child mental health', 'child psychology',
                'child counseling', 'child therapy', 'child stress',
                'child anxiety', 'child depression', 'child behavioral issues',
                'child emotional problems', 'child rehabilitation',
                
                // Documentation and Identity
                'child identity', 'child documents', 'child ID proof',
                'child birth certificate', 'child school certificate',
                'child verification', 'child age proof', 'undocumented child',
                'child without papers', 'child registration',
                
                // Railway Specific Staff
                'TTE child issue', 'RPF child rescue', 'GRP child case',
                'station master child', 'child help by staff', 'railway child protection',
                'child safety officer', 'child welfare officer',
                
                // Emergency Situations
                'child emergency', 'child crisis', 'urgent child help',
                'immediate child assistance', 'child SOS', 'child distress call',
                'child rescue needed', 'child in danger', 'child threat',
                
                // Specific Locations
                'child on platform', 'child in waiting room', 'child in toilet',
                'child in parking', 'child near tracks', 'child on bridge',
                'child in subway', 'child in tunnel', 'child on footbridge',
                
                // Technology and Communication
                'child tracking', 'child monitoring', 'child surveillance',
                'child CCTV', 'child communication', 'child phone',
                'child contact', 'child tracing technology', 'child GPS'
            ],
            departments: ['RPF Security Team']
        }
    ],
    priority: 'urgent',
    confidence: 0.9
},

'Refund & Financial': {
    subcategories: [
        {
            name: 'Refund Issues',
            keywords: [
                // General Refund Terms
                'refund', 'money not credited', 'refund pending', 'refund delayed', 'refund not received',
                'refund policy', 'cancellation refund', 'TDR', 'ticket deposit receipt',
                'refund amount wrong', 'partial refund', 'full refund', 'refund status',
                
                // Refund Processing Issues
                'refund not processed', 'refund failed', 'refund rejected', 'refund cancelled',
                'refund under process', 'refund in progress', 'refund processing delay',
                'refund verification pending', 'refund approval pending', 'refund on hold',
                'refund stuck', 'refund blocked', 'refund suspended', 'refund investigation',
                
                // Refund Amount Issues
                'wrong refund amount', 'less refund amount', 'incorrect refund',
                'refund calculation error', 'refund discrepancy', 'refund shortage',
                'excess refund', 'refund overpayment', 'refund underpayment',
                'cancellation charges deducted', 'clerkage charges', 'service charges deducted',
                
                // Automatic vs Manual Refunds
                'automatic refund', 'auto refund', 'manual refund', 'system refund',
                'e-ticket refund', 'counter refund', 'online refund', 'offline refund',
                'instant refund', 'immediate refund', 'quick refund', 'fast refund',
                
                // TDR Related
                'TDR filing', 'TDR status', 'TDR pending', 'TDR rejected', 'TDR approved',
                'ticket deposit receipt', 'TDR form', 'TDR application', 'TDR submission',
                'TDR tracking', 'TDR number', 'TDR reference', 'TDR processing',
                
                // Refund Timeframes
                'refund time limit', 'refund deadline', 'refund within 5 days', 'refund within 7 days',
                'late refund', 'delayed refund credit', 'refund time exceeded',
                'refund processing time', 'refund credit time', 'refund transfer time',
                
                // Specific Refund Scenarios
                'train cancelled refund', 'train delayed refund', 'missed train refund',
                'connecting train refund', 'partial journey refund', 'unused ticket refund',
                'confirmed ticket refund', 'waitlist ticket refund', 'RAC ticket refund',
                'tatkal refund', 'premium tatkal refund', 'emergency refund',
                
                // Refund Methods
                'bank account refund', 'card refund', 'wallet refund', 'cash refund',
                'original payment method', 'source account credit', 'refund to card',
                'refund to bank', 'refund to wallet', 'refund mode',
                
                // Refund Documentation
                'refund receipt', 'refund confirmation', 'refund voucher', 'refund proof',
                'refund statement', 'refund certificate', 'refund acknowledgment',
                'refund SMS', 'refund email', 'refund notification'
            ],
            departments: ['Finance Refund Team']
        },
        {
            name: 'Payment Issues',
            keywords: [
                // Double Charging Issues
                'double charge', 'multiple deduction', 'duplicate payment', 'duplicate transaction',
                'double booking charge', 'twice charged', 'repeated deduction', 'multiple billing',
                'same amount deducted twice', 'duplicate charge', 'extra deduction',
                
                // Payment Failures
                'payment failed', 'transaction failed', 'payment not processed', 'payment unsuccessful',
                'payment error', 'payment timeout', 'payment declined', 'payment rejected',
                'payment aborted', 'payment cancelled', 'payment incomplete', 'payment stuck',
                
                // Money Deduction Issues
                'amount deducted', 'money deducted', 'money debited', 'account debited',
                'amount charged', 'money deducted but ticket not confirmed', 'deducted without booking',
                'unauthorized deduction', 'unwanted deduction', 'wrong deduction',
                
                // Gateway and Technical Issues
                'payment gateway error', 'gateway timeout', 'gateway failure', 'gateway down',
                'payment server error', 'payment system error', 'payment processing error',
                'transaction processing failed', 'payment network error', 'payment connectivity issue',
                
                // Card Payment Issues
                'card declined', 'credit card declined', 'debit card declined', 'card not accepted',
                'card payment failed', 'card transaction failed', 'card blocked',
                'card expired', 'card limit exceeded', 'insufficient balance',
                'CVV error', 'card verification failed', 'card authentication failed',
                
                // UPI Payment Issues
                'UPI failed', 'UPI payment failed', 'UPI transaction failed', 'UPI error',
                'UPI timeout', 'UPI not working', 'UPI server down', 'UPI app error',
                'UPI PIN error', 'UPI verification failed', 'UPI authentication failed',
                'PhonePe failed', 'Google Pay failed', 'Paytm UPI failed', 'BHIM UPI failed',
                
                // Net Banking Issues
                'net banking failed', 'internet banking failed', 'bank login failed',
                'bank authentication failed', 'bank session expired', 'bank server error',
                'online banking error', 'bank website error', 'bank portal down',
                
                // Digital Wallet Issues
                'wallet payment failed', 'wallet error', 'wallet transaction failed',
                'Paytm failed', 'PhonePe failed', 'Google Pay failed', 'Amazon Pay failed',
                'Mobikwik failed', 'Freecharge failed', 'wallet balance insufficient',
                'wallet not linked', 'wallet KYC issue', 'wallet blocked',
                
                // EMI and Loan Issues
                'EMI failed', 'EMI payment failed', 'EMI transaction failed', 'EMI error',
                'loan payment failed', 'financing failed', 'BNPL failed', 'installment failed',
                'credit line error', 'loan approval failed', 'EMI eligibility failed',
                
                // Payment Status Issues
                'payment status unknown', 'payment pending', 'payment processing',
                'payment verification pending', 'payment confirmation pending',
                'payment under review', 'payment being processed', 'payment queued'
            ],
            departments: ['Payment Gateway Support']
        },
        {
            name: 'Erroneous Charges',
            keywords: [
                // Wrong Charges
                'erroneous charge', 'wrong deduction', 'incorrect charge', 'wrong amount charged',
                'overcharged', 'extra charge', 'additional charge', 'unexpected charge',
                'unauthorized deduction', 'incorrect amount', 'wrong billing', 'billing error',
                'charge error', 'amount error', 'calculation error', 'pricing error',
                
                // Fare Related Issues
                'fare difference', 'wrong fare calculation', 'fare error', 'incorrect fare',
                'fare discrepancy', 'fare overcharge', 'base fare error', 'fare miscalculation',
                'dynamic fare error', 'surge pricing error', 'peak fare error',
                'class fare wrong', 'route fare wrong', 'distance fare error',
                
                // Service and Processing Fees
                'service charge', 'convenience fee', 'processing fee', 'transaction fee',
                'booking fee', 'platform fee', 'gateway fee', 'handling charge',
                'hidden charges', 'undisclosed charges', 'surprise charges', 'unexpected fees',
                'extra service charge', 'additional convenience fee', 'excessive processing fee',
                
                // Tax and Government Charges
                'GST error', 'tax calculation error', 'wrong tax amount', 'GST overcharge',
                'service tax error', 'tax discrepancy', 'incorrect GST', 'tax miscalculation',
                'CGST error', 'SGST error', 'IGST error', 'cess error',
                
                // Tatkal and Premium Charges
                'tatkal charge error', 'premium tatkal overcharge', 'tatkal fee wrong',
                'emergency quota charge', 'special train surcharge', 'express charge error',
                'superfast charge error', 'AC charge error', 'berth charge error',
                
                // Quota and Reservation Charges
                'quota charge error', 'reservation fee error', 'booking charge error',
                'confirmation charge', 'upgrade charge error', 'class change fee error',
                'seat preference charge', 'berth preference fee', 'coach preference charge',
                
                // Cancellation and Modification Charges
                'cancellation charge error', 'modification fee error', 'change fee wrong',
                'rescheduling charge error', 'date change fee error', 'name change fee error',
                'excessive cancellation charge', 'wrong modification fee', 'clerkage charge error',
                
                // Insurance and Add-on Charges
                'travel insurance charge', 'insurance premium error', 'catering charge error',
                'meal charge wrong', 'bedroll charge error', 'pillow charge error',
                'add-on service charge', 'optional service fee', 'ancillary charge error',
                
                // Agent and Third Party Charges
                'agent commission', 'agent markup', 'third party charges', 'booking agent fee',
                'travel agent commission', 'intermediary charges', 'vendor markup',
                'distributor fee', 'partner charges', 'affiliate commission'
            ],
            departments: ['Finance Dispute Team']
        },
        {
            name: 'Financial Disputes',
            keywords: [
                // General Dispute Terms
                'dispute', 'financial dispute', 'payment dispute', 'billing dispute',
                'charge dispute', 'amount dispute', 'transaction dispute', 'refund dispute',
                'fare dispute', 'fee dispute', 'service dispute', 'commercial dispute',
                
                // Chargeback Related
                'chargeback', 'chargeback request', 'chargeback filing', 'chargeback claim',
                'bank chargeback', 'credit card chargeback', 'debit card chargeback',
                'chargeback initiated', 'chargeback pending', 'chargeback approved',
                'chargeback rejected', 'chargeback reversal', 'chargeback dispute',
                
                // Documentation and Proof
                'bank statement', 'transaction history', 'payment history', 'account statement',
                'payment proof', 'transaction proof', 'receipt', 'invoice', 'bill',
                'voucher', 'confirmation', 'acknowledgment', 'evidence', 'documentation',
                'financial record', 'payment record', 'transaction record',
                
                // Billing Complaints
                'billing complaint', 'billing error', 'billing discrepancy', 'billing issue',
                'invoice error', 'invoice discrepancy', 'invoice complaint', 'bill correction',
                'amount correction', 'charge correction', 'fee correction',
                
                // Investigation and Resolution
                'investigation', 'inquiry', 'review', 'audit', 'verification', 'validation',
                'dispute resolution', 'dispute settlement', 'dispute investigation',
                'financial investigation', 'transaction investigation', 'payment investigation',
                
                // Legal and Regulatory
                'consumer complaint', 'consumer rights', 'consumer protection', 'legal action',
                'ombudsman complaint', 'regulatory complaint', 'financial grievance',
                'banking ombudsman', 'payment council complaint', 'RBI complaint',
                
                // Resolution Status
                'dispute pending', 'dispute under review', 'dispute approved', 'dispute rejected',
                'dispute resolved', 'dispute closed', 'dispute escalated', 'dispute transferred',
                'provisional credit', 'temporary credit', 'interim relief', 'final settlement',
                
                // Communication and Follow-up
                'dispute communication', 'dispute correspondence', 'dispute follow-up',
                'dispute escalation', 'dispute appeal', 'dispute hearing', 'dispute meeting',
                'dispute negotiation', 'dispute mediation', 'dispute arbitration'
            ],
            departments: ['Finance Dispute Team']
        },
        {
            name: 'Specific Payment Methods',
            keywords: [
                // Credit Cards
                'credit card', 'credit card payment', 'CC payment', 'Visa credit card',
                'Mastercard credit', 'American Express', 'Amex', 'RuPay credit card',
                'credit card transaction', 'credit card booking', 'credit card refund',
                'credit card dispute', 'credit card chargeback', 'credit card declined',
                
                // Debit Cards
                'debit card', 'debit card payment', 'DC payment', 'Visa debit card',
                'Mastercard debit', 'RuPay debit card', 'ATM card', 'bank card',
                'debit card transaction', 'debit card booking', 'debit card refund',
                'debit card declined', 'debit card blocked', 'debit card expired',
                
                // Net Banking
                'net banking', 'internet banking', 'online banking', 'bank transfer',
                'NEFT', 'RTGS', 'IMPS', 'bank account transfer', 'account to account',
                'SBI net banking', 'HDFC net banking', 'ICICI net banking', 'Axis net banking',
                'PNB net banking', 'BOI net banking', 'Canara net banking',
                
                // UPI Services
                'UPI', 'unified payment interface', 'UPI payment', 'UPI transaction',
                'UPI transfer', 'UPI booking', 'UPI refund', 'UPI failed',
                'BHIM UPI', 'Google Pay', 'GPay', 'PhonePe', 'Paytm UPI',
                'Amazon Pay UPI', 'WhatsApp Pay', 'Samsung Pay', 'Mi Pay',
                
                // Digital Wallets
                'Paytm', 'Paytm wallet', 'Paytm payment', 'PhonePe wallet', 'Google Pay wallet',
                'Amazon Pay', 'Mobikwik', 'Freecharge', 'Ola Money', 'PayZapp',
                'ICICI Pockets', 'SBI Buddy', 'Airtel Money', 'JioMoney',
                'wallet', 'digital wallet', 'e-wallet', 'mobile wallet',
                
                // Banking and Financial Services
                'BHIM', 'BHIM app', 'bank app payment', 'mobile banking', 'banking app',
                'UPI QR code', 'QR payment', 'scan and pay', 'tap and pay',
                'contactless payment', 'NFC payment', 'proximity payment',
                
                // EMI and Financing
                'EMI', 'equated monthly installment', 'installment payment', 'EMI option',
                'loan', 'credit', 'financing', 'buy now pay later', 'BNPL',
                'deferred payment', 'credit line', 'instant loan', 'personal loan',
                'travel loan', 'ticket financing', 'payment plan',
                
                // Cash and Offline Methods
                'cash on delivery', 'COD', 'pay on delivery', 'cash payment',
                'counter payment', 'offline payment', 'manual payment', 'cash collection',
                'doorstep collection', 'agent collection', 'cash pickup',
                
                // International Payment Methods
                'international card', 'foreign card', 'overseas payment', 'NRI payment',
                'dollar payment', 'USD payment', 'PayPal', 'international transfer',
                'forex card', 'travel card', 'prepaid card', 'gift card',
                
                // Corporate and Business Payments
                'corporate payment', 'business payment', 'bulk payment', 'group payment',
                'company account', 'corporate card', 'business card', 'procurement card',
                'expense account', 'official payment', 'organization payment',
                
                // Subscription and Recurring Payments
                'recurring payment', 'auto debit', 'auto payment', 'subscription payment',
                'standing instruction', 'mandate', 'auto renewal', 'periodic payment',
                'scheduled payment', 'regular payment', 'monthly payment'
            ],
            departments: ['Payment Gateway Support']
        }
    ],
    priority: 'high',
    confidence: 0.9
},

// ----------------------------
'Ticketing & Booking': {
    subcategories: [
        {
            name: 'Booking Failures',
            keywords: [
                // General Booking Failures
                'booking failed', 'booking error', 'booking not confirmed', 'booking cancelled',
                'booking problem', 'unable to book', 'booking timeout', 'session expired',
                'booking declined', 'booking rejected', 'booking pending', 'booking stuck',
                
                // Technical Errors
                'technical error', 'system error', 'server error', 'network error',
                'website crash', 'app crash', 'system down', 'server down', 'maintenance mode',
                'HTTP error', '404 error', '500 error', 'gateway timeout', 'NGET error',
                'database error', 'connection timeout', 'loading error', 'page not found',
                
                // IRCTC Specific Errors
                'IRCTC down', 'IRCTC not working', 'IRCTC error', 'IRCTC maintenance',
                'IRCTC website slow', 'IRCTC app not working', 'IRCTC login failed',
                'IRCTC payment failed', 'IRCTC booking failed', 'IRCTC server busy',
                
                // Error Codes from PRS System
                'BER011', 'BER012', 'BER013', 'BER014', 'BER015', 'BER016', 'BER017',
                'BER018', 'BER019', 'BER020', 'PRS error', 'PRS unavailable',
                'passenger reservation system error', 'database communication failure',
                
                // Session and Authentication Issues
                'session timeout', 'session expired', 'login timeout', 'authentication failed',
                'user session invalid', 'session disconnected', 'logged out automatically',
                'multiple login sessions', 'concurrent session limit', 'session conflict',
                
                // Booking Process Failures
                'booking process interrupted', 'booking process failed', 'booking incomplete',
                'booking not saved', 'booking lost', 'booking disappeared', 'booking vanished',
                'unable to proceed', 'cannot continue booking', 'stuck at payment',
                'stuck at confirmation', 'booking frozen', 'booking hanging',
                
                // Platform Specific Issues
                'mobile app booking failed', 'website booking failed', 'counter booking failed',
                'agent booking failed', 'third party booking failed', 'API booking failed',
                'chatbot booking failed', 'IVRS booking failed', 'SMS booking failed'
            ],
            departments: ['Booking Support Team']
        },
        {
            name: 'Reservation Issues',
            keywords: [
                // General Reservation Terms
                'reservation', 'reservation problem', 'reservation failed', 'reservation error',
                'reservation not confirmed', 'reservation cancelled', 'reservation pending',
                'reservation status', 'reservation enquiry', 'reservation chart',
                
                // Seat/Berth Availability
                'seat not available', 'berth not available', 'no seats', 'no berths',
                'seats full', 'berths full', 'train full', 'class full', 'quota full',
                'no vacancy', 'fully booked', 'sold out', 'capacity full',
                
                // Wait List Types and Status
                'waitlist', 'waiting list', 'WL', 'wait listed', 'wait list status',
                'GNWL', 'general waiting list', 'PQWL', 'pooled quota waiting list',
                'RSWL', 'roadside station waiting list', 'TQWL', 'tatkal waiting list',
                'RLWL', 'remote location waiting list', 'PTWL', 'pooled tatkal waiting list',
                
                // Confirmation Status
                'confirmation', 'CNF', 'confirmed', 'confirm', 'confirmed seat',
                'confirmed berth', 'confirmation probability', 'confirmation chances',
                'auto confirmation', 'manual confirmation', 'final confirmation',
                
                // RAC (Reservation Against Cancellation)
                'RAC', 'reservation against cancellation', 'RAC status', 'RAC ticket',
                'RAC berth', 'shared berth', 'RAC to confirm', 'RAC passenger',
                'RAC allocation', 'RAC upgrade', 'RAC confirmation',
                
                // Chart Preparation
                'chart preparation', 'chart prepared', 'charting done', 'final chart',
                'first chart', 'second chart', 'chart not prepared', 'chart update',
                'chart revision', 'passenger chart', 'reservation chart prepared',
                
                // Quota Issues
                'quota exhausted', 'quota full', 'quota not available', 'quota problem',
                'general quota', 'ladies quota', 'senior citizen quota', 'handicap quota',
                'lower berth quota', 'premium tatkal quota', 'emergency quota',
                'VIP quota', 'foreign tourist quota', 'defense quota', 'parliament quota',
                
                // Booking Class and Preferences
                'class not available', 'preferred class full', 'class upgrade',
                'class downgrade', 'alternate class', 'higher class available',
                'lower class available', 'different class suggestion'
            ],
            departments: ['Booking Support Team']
        },
        {
            name: 'Tatkal Booking',
            keywords: [
                // General Tatkal Terms
                'tatkal booking', 'tatkal failed', 'tatkal error', 'tatkal problem',
                'tatkal not working', 'tatkal issues', 'tatkal difficulty', 'tatkal trouble',
                'tatkal service', 'tatkal reservation', 'tatkal ticket', 'emergency booking',
                
                // Tatkal Types
                'premium tatkal', 'normal tatkal', 'tatkal quota', 'tatkal scheme',
                'tatkal category', 'tatkal class', 'AC tatkal', 'non AC tatkal',
                'sleeper tatkal', 'chair car tatkal', 'tatkal charges', 'tatkal fare',
                
                // Timing Issues
                'tatkal timing', 'tatkal time', 'tatkal opening time', 'tatkal start time',
                '10 AM tatkal', '11 AM tatkal', 'tatkal window', 'tatkal booking window',
                'tatkal booking hours', 'tatkal deadline', 'tatkal cut off time',
                'missed tatkal timing', 'late for tatkal', 'tatkal booking closed',
                
                // Availability Issues
                'tatkal not available', 'tatkal full', 'tatkal sold out', 'tatkal exhausted',
                'tatkal quota over', 'tatkal waitlist', 'no tatkal seats', 'no tatkal berths',
                'tatkal capacity full', 'tatkal booking closed', 'tatkal suspended',
                
                // Tatkal Booking Process
                'tatkal booking failed', 'tatkal payment failed', 'tatkal session expired',
                'tatkal booking stuck', 'tatkal loading error', 'tatkal server busy',
                'tatkal website crash', 'tatkal app error', 'tatkal technical issue',
                
                // Tatkal Rules and Restrictions
                'tatkal ID proof', 'tatkal photo ID', 'tatkal identification',
                'tatkal passenger limit', 'tatkal booking limit', 'tatkal IP restriction',
                'tatkal cancellation', 'tatkal refund', 'no tatkal refund',
                'tatkal modification', 'tatkal date change', 'tatkal name change',
                
                // Quota Specific
                'emergency quota', 'VIP quota', 'ladies quota', 'senior citizen quota',
                'handicap quota', 'defense quota', 'foreign tourist quota',
                'parliament quota', 'railway employee quota', 'duty pass',
                
                // Tatkal Error Messages
                'regret no room', 'tatkal booking suspended', 'tatkal service unavailable',
                'tatkal quota not open', 'tatkal booking not allowed', 'tatkal restricted',
                'invalid tatkal request', 'tatkal booking violation'
            ],
            departments: ['Tatkal Support Team']
        },
        {
            name: 'Ticket Issues',
            keywords: [
                // Ticket Types
                'ticket', 'e-ticket', 'electronic ticket', 'i-ticket', 'internet ticket',
                'counter ticket', 'paper ticket', 'mobile ticket', 'digital ticket',
                'physical ticket', 'postal ticket', 'agent ticket', 'online ticket',
                
                // Ticket Generation Issues
                'ticket printing', 'ticket not generated', 'ticket generation failed',
                'ticket creation error', 'ticket format error', 'ticket display error',
                'ticket download failed', 'ticket download error', 'ticket file corrupt',
                'ticket PDF error', 'ticket image error', 'ticket barcode error',
                
                // Ticket Download Issues
                'ticket download', 'cannot download ticket', 'download not working',
                'download link broken', 'download expired', 'download limit exceeded',
                'PDF not opening', 'ticket file not found', 'download timeout',
                'download permission denied', 'download server error',
                
                // Duplicate and Invalid Tickets
                'duplicate ticket', 'multiple tickets', 'double booking', 'ticket duplication',
                'invalid ticket', 'fake ticket', 'fraudulent ticket', 'unauthorized ticket',
                'ticket verification failed', 'ticket authentication error',
                
                // Ticket Modifications
                'ticket cancellation', 'ticket cancellation failed', 'cannot cancel ticket',
                'ticket modification', 'ticket change', 'date change', 'train change',
                'passenger name change', 'ticket amendment', 'ticket correction',
                'ticket update', 'ticket revision', 'ticket edit',
                
                // Ticket Status Issues
                'ticket status', 'ticket confirmation', 'ticket pending', 'ticket processing',
                'ticket waitlisted', 'ticket cancelled', 'ticket expired', 'ticket invalid',
                'ticket blocked', 'ticket suspended', 'ticket on hold',
                
                // Ticket Display and Format
                'ticket format', 'ticket layout', 'ticket design', 'ticket template',
                'ticket information missing', 'ticket details incorrect', 'ticket data error',
                'PNR not showing', 'seat number missing', 'coach number missing',
                'train details wrong', 'passenger details wrong', 'fare details wrong',
                
                // Printing Issues
                'ticket printing failed', 'printer error', 'print quality poor',
                'print not clear', 'barcode not printing', 'QR code not printing',
                'ticket paper jam', 'printer offline', 'ink cartridge empty',
                
                // Mobile and App Tickets
                'mobile ticket', 'app ticket', 'smartphone ticket', 'digital wallet ticket',
                'ticket in app', 'ticket on phone', 'mobile display ticket',
                'offline ticket', 'ticket sync error', 'ticket backup'
            ],
            departments: ['Urgent Ticketing Support']
        },
        {
            name: 'Seat/Berth Issues',
            keywords: [
                // Seat/Berth Allocation
                'seat allocation', 'berth allocation', 'seat assignment', 'berth assignment',
                'seat allotment', 'berth allotment', 'seat distribution', 'berth distribution',
                'seat arrangement', 'berth arrangement', 'seating plan', 'berth plan',
                
                // Seat/Berth Preferences
                'seat preference', 'berth preference', 'seating preference', 'seat choice',
                'berth choice', 'preferred seat', 'preferred berth', 'seat selection',
                'berth selection', 'seat option', 'berth option', 'seat type',
                
                // Lower Berth Issues (Based on new policy)
                'lower berth', 'lower berth not given', 'lower berth allocation',
                'lower berth preference', 'lower berth quota', 'lower berth reservation',
                'senior citizen lower berth', 'female lower berth', 'pregnant woman lower berth',
                'disability lower berth', 'medical lower berth', 'automatic lower berth',
                
                // Upper and Middle Berth Issues
                'upper berth', 'middle berth', 'side berth', 'side upper', 'side lower',
                'berth position', 'berth level', 'berth height', 'climbing difficulty',
                'upper berth problem', 'middle berth discomfort', 'berth accessibility',
                
                // Window and Aisle Preferences
                'window seat', 'aisle seat', 'window preference', 'aisle preference',
                'window side', 'corridor side', 'window berth', 'aisle berth',
                'seat position', 'seat location', 'seat facing', 'seat direction',
                
                // Coach and Compartment Issues
                'coach allocation', 'coach assignment', 'coach number', 'coach type',
                'compartment', 'compartment allocation', 'bogey', 'bogey number',
                'coach position', 'coach location', 'coach preference', 'coach change',
                
                // Class Specific Seating
                'AC coach', 'non AC coach', 'sleeper coach', 'chair car coach',
                'first class coach', 'second class coach', 'economy coach', 'premium coach',
                'executive coach', 'business coach', 'general coach', 'reserved coach',
                
                // Special Accommodation
                'family accommodation', 'group seating', 'together seating', 'adjacent seats',
                'consecutive berths', 'same coach', 'same compartment', 'couple seating',
                'child seating', 'infant accommodation', 'elderly accommodation',
                
                // Accessibility Seating
                'wheelchair accessible seat', 'disabled seating', 'handicap berth',
                'special needs seating', 'medical accommodation', 'assistance seating',
                'mobility aid space', 'equipment space', 'attendant seating'
            ],
            departments: ['Booking Support Team']
        },
        {
            name: 'Class Issues',
            keywords: [
                // AC Classes
                '1A', '1AC', 'AC first class', 'first AC', 'AC 1', 'first class AC',
                'air conditioned first class', 'executive class', 'premium first class',
                
                '2A', '2AC', 'AC two tier', 'AC 2 tier', 'second AC', 'two tier AC',
                'air conditioned two tier', 'AC second class', '2 tier sleeper',
                
                '3A', '3AC', 'AC three tier', 'AC 3 tier', 'third AC', 'three tier AC',
                'air conditioned three tier', 'AC third class', '3 tier sleeper',
                
                // Non-AC Classes
                'sleeper', 'SL', 'sleeper class', 'non AC sleeper', 'sleeper coach',
                'unreserved sleeper', 'general sleeper', 'second class sleeper',
                
                'second sitting', '2S', 'second class sitting', 'reserved sitting',
                'sitting class', 'day coach', 'reserved second class',
                
                // Chair Car Classes
                'chair car', 'CC', 'AC chair car', 'air conditioned chair car',
                'executive chair car', 'EC', 'premium chair car', 'business chair car',
                'reclining chair car', 'comfortable chair car', 'reserved chair car',
                
                // Special Classes
                'executive class', 'premium class', 'business class', 'economy class',
                'luxury class', 'deluxe class', 'superior class', 'standard class',
                'tourist class', 'VIP class', 'first class', 'second class',
                
                // Class Upgrades and Downgrades
                'class upgrade', 'class downgrade', 'upgrade to higher class',
                'downgrade to lower class', 'class change', 'class modification',
                'automatic upgrade', 'paid upgrade', 'complimentary upgrade',
                'class availability', 'alternate class', 'different class',
                
                // Class Specific Issues
                'class not available', 'class full', 'class booking failed',
                'class preference', 'class selection', 'class option', 'class choice',
                'wrong class booked', 'class error', 'class mismatch',
                
                // Fare Class Issues
                'class fare', 'fare difference', 'class pricing', 'class charges',
                'expensive class', 'affordable class', 'budget class', 'premium fare',
                'class cost', 'fare comparison', 'class value', 'price difference'
            ],
            departments: ['Booking Support Team']
        },
        {
            name: 'Booking Platforms',
            keywords: [
                // Official Platforms
                'IRCTC', 'IRCTC website', 'IRCTC portal', 'irctc.co.in', 'irctc.in',
                'IRCTC connect', 'IRCTC rail connect', 'official IRCTC app',
                'IRCTC mobile app', 'IRCTC android app', 'IRCTC iOS app',
                
                // Mobile Applications
                'mobile app', 'smartphone app', 'mobile booking', 'app booking',
                'mobile application', 'railway app', 'train booking app',
                'ticket booking app', 'mobile platform', 'app platform',
                
                // Website Booking
                'website booking', 'online booking', 'web booking', 'internet booking',
                'browser booking', 'computer booking', 'laptop booking',
                'desktop booking', 'web portal', 'online portal',
                
                // Counter and Agent Booking
                'agent booking', 'travel agent', 'booking agent', 'authorized agent',
                'railway agent', 'ticket agent', 'offline agent', 'local agent',
                'counter booking', 'PRS counter', 'railway counter', 'station counter',
                'reservation counter', 'ticket counter', 'booking counter',
                
                // Third Party Platforms
                'third party booking', 'external booking', 'partner booking',
                'MakeMyTrip', 'Cleartrip', 'Goibibo', 'Paytm', 'Amazon',
                'ixigo', 'redBus', 'Yatra', 'EaseMyTrip', 'Booking.com',
                'online travel agent', 'OTA booking', 'travel portal',
                
                // Alternative Booking Methods
                'SMS booking', 'text booking', 'IVRS booking', 'phone booking',
                'call center booking', 'helpline booking', 'voice booking',
                'automated booking', 'chatbot booking', 'AI booking',
                
                // Booking Channels
                'online booking', 'offline booking', 'digital booking', 'manual booking',
                'electronic booking', 'paper booking', 'mobile booking', 'web booking',
                'app based booking', 'platform booking', 'channel booking',
                
                // Platform Issues
                'platform error', 'platform down', 'platform not working',
                'platform slow', 'platform maintenance', 'platform update',
                'platform compatibility', 'platform support', 'platform access',
                'login platform', 'booking platform issue', 'platform crash'
            ],
            departments: ['Booking Support Team']
        }
    ],
    priority: 'high',
    confidence: 0.85
},
// ----------------------------


'Catering & Food': {
    subcategories: [
        {
            name: 'Food Quality Issues',
            keywords: [
                // General Quality Issues
                'food quality', 'bad food', 'spoiled food', 'rotten food', 'stale food',
                'expired food', 'contaminated food', 'food poisoning', 'stomach upset',
                'indigestion', 'vomiting', 'diarrhea', 'food allergy', 'food intolerance',
                'unhygienic food', 'dirty food', 'poor food quality', 'substandard food',
                
                // Contamination Issues
                'hair in food', 'insect in food', 'fly in food', 'cockroach in food',
                'dead insects', 'foreign object', 'plastic in food', 'glass in food',
                'stone in food', 'metal in food', 'dirt in food', 'dust in food',
                'sand in food', 'wire in food', 'paper in food', 'cloth in food',
                
                // Preparation Issues
                'uncooked food', 'undercooked food', 'raw food', 'half cooked',
                'burnt food', 'overcooked food', 'unboiled', 'not properly cooked',
                'food not heated', 'cold meal', 'frozen food', 'hard food',
                'soggy food', 'mushy food', 'watery food', 'lumpy food',
                
                // Hygiene Issues
                'unhygienic preparation', 'dirty kitchen', 'unclean utensils', 'dirty hands',
                'no gloves', 'unhygienic storage', 'open food', 'uncovered food',
                'food kept in dirty place', 'contaminated water', 'dirty serving',
                'unsanitary conditions', 'poor hygiene standards', 'contaminated utensils',
                
                // Health Issues
                'food poisoning', 'stomach infection', 'gastric problem', 'nausea',
                'stomach pain', 'stomach ache', 'loose motion', 'dysentery',
                'food allergy reaction', 'skin rash from food', 'breathing difficulty',
                'fever after eating', 'weakness after meal', 'headache after food',
                
                // Sensory Issues
                'bad smell', 'foul smell', 'rotten smell', 'sour smell', 'off smell',
                'strange taste', 'bitter taste', 'sour taste', 'metallic taste',
                'weird flavor', 'tasteless food', 'no flavor', 'artificial taste',
                
                // Storage and Packaging Issues
                'expired packaging', 'damaged packaging', 'leaking container', 'torn packet',
                'no expiry date', 'crossed expiry date', 'old stock', 'stale packet',
                'improper storage', 'room temperature storage', 'no refrigeration'
            ],
            departments: ['Catering Quality Team']
        },
        {
            name: 'Food Service Issues',
            keywords: [
                // Service Availability
                'no food provided', 'food not served', 'food not available', 'food shortage',
                'menu not available', 'food cancelled', 'food finished', 'food sold out',
                'no meals', 'meal not provided', 'food service suspended', 'catering closed',
                'pantry car closed', 'no catering', 'food counter closed',
                
                // Timing Issues
                'food delayed', 'late food service', 'meal timing wrong', 'food timing',
                'meal timing', 'delayed breakfast', 'delayed lunch', 'delayed dinner',
                'food served late', 'meal not on time', 'service timing',
                'missed meal', 'no food at meal time', 'breakfast timing',
                
                // Temperature Issues
                'cold food', 'food not hot', 'lukewarm food', 'room temperature food',
                'reheated food', 'microwaved food', 'not fresh food', 'food not warm',
                'chilled food', 'frozen meal', 'food temperature wrong',
                
                // Meal Components
                'breakfast', 'lunch', 'dinner', 'snacks', 'evening snacks', 'morning snacks',
                'tea', 'coffee', 'water', 'beverages', 'soft drinks', 'juice',
                'milk', 'biscuits', 'fruits', 'dessert', 'sweet', 'ice cream',
                
                // Quantity Issues
                'less quantity', 'small portion', 'insufficient food', 'half portion',
                'reduced quantity', 'quantity not as per menu', 'less food',
                'incomplete meal', 'missing items', 'food items missing',
                'partial meal', 'food not enough', 'inadequate serving',
                
                // Order and Delivery Issues
                'order not delivered', 'wrong order delivered', 'order cancelled',
                'order delayed', 'food delivery failed', 'order not received',
                'incomplete order', 'missing order', 'order mix up',
                'wrong food delivered', 'order not found', 'delivery error',
                
                // E-catering Specific
                'e-catering failed', 'online order failed', 'app order failed',
                'IRCTC food not delivered', 'online food order cancelled',
                'e-catering refund', 'digital payment failed', 'COD not available',
                'food booking failed', 'order confirmation failed'
            ],
            departments: ['Premium Catering Team']
        },
        {
            name: 'Pricing Issues',
            keywords: [
                // Overcharging
                'overpriced food', 'expensive meal', 'food cost high', 'meal cost high',
                'food price high', 'overcharged food', 'extra charges', 'hidden charges',
                'additional charges', 'service charges food', 'delivery charges',
                'packaging charges', 'convenience fee food', 'GST extra',
                
                // Billing Errors
                'billing error food', 'food bill wrong', 'incorrect bill', 'wrong amount',
                'double charged food', 'multiple billing', 'bill discrepancy',
                'calculation error', 'wrong total', 'incorrect GST', 'tax error',
                
                // Menu Pricing
                'menu price wrong', 'food rates high', 'catering charges high', 'meal charges',
                'price list wrong', 'MRP violation', 'above MRP', 'price mismatch',
                'rate card wrong', 'inflated prices', 'unreasonable pricing',
                
                // Value for Money
                'not worth the price', 'poor value', 'expensive for quality',
                'overpriced for quantity', 'money wasted', 'costly food',
                'premium pricing', 'luxury rates', 'expensive rates',
                
                // Payment Issues
                'payment problem food', 'refund not given', 'no refund for cancelled food',
                'advance payment lost', 'money deducted twice', 'payment gateway error food',
                'UPI payment failed food', 'card payment declined food',
                
                // Comparative Pricing
                'costlier than restaurant', 'expensive than outside', 'high price compared',
                'market rate higher', 'station food expensive', 'platform food costly',
                'vendor overcharging', 'hawker high price', 'inflated station rates'
            ],
            departments: ['Catering Quality Team']
        },
        {
            name: 'Catering Service',
            keywords: [
                // Service Types
                'catering', 'catering service', 'food service', 'meal service',
                'pantry car', 'pantry service', 'food trolley', 'meal trolley',
                'food cart', 'catering trolley', 'mobile catering', 'train catering',
                
                // Food Delivery
                'food delivery', 'meal delivery', 'home delivery', 'seat delivery',
                'berth delivery', 'coach delivery', 'platform delivery', 'station delivery',
                'door to door delivery', 'express delivery', 'scheduled delivery',
                
                // Online Services
                'e-catering', 'online food', 'digital food ordering', 'app food ordering',
                'food booking', 'meal booking', 'advance booking', 'pre booking',
                'IRCTC food', 'railway food app', 'train food booking',
                'internet food ordering', 'mobile food booking',
                
                // Staff and Personnel
                'catering staff', 'food server', 'pantry staff', 'chef', 'cook',
                'food vendor', 'meal vendor', 'catering contractor', 'food supplier',
                'kitchen staff', 'serving staff', 'food handler', 'catering manager',
                'pantry car attendant', 'food trolley operator',
                
                // Base Kitchen and Infrastructure
                'base kitchen', 'railway kitchen', 'central kitchen', 'food preparation center',
                'catering unit', 'kitchen facility', 'food processing unit',
                'meal preparation facility', 'FSSAI certified kitchen', 'licensed kitchen',
                
                // Service Standards
                'service quality', 'catering standards', 'food safety standards',
                'hygiene standards', 'HACCP compliance', 'FSSAI compliance',
                'ISO certification', 'quality control', 'food testing',
                
                // Catering Contracts
                'catering contractor', 'food contractor', 'catering license',
                'vendor contract', 'service provider', 'authorized vendor',
                'licensed caterer', 'railway approved vendor', 'IRCTC empaneled'
            ],
            departments: ['IRCTC E-Catering Team']
        },
        {
            name: 'Dietary Requirements',
            keywords: [
                // Basic Dietary Preferences
                'vegetarian', 'non-vegetarian', 'veg', 'non-veg', 'pure veg',
                'vegan', 'plant based', 'no animal products', 'dairy free vegan',
                'egg free', 'meat free', 'fish free', 'chicken free',
                
                // Religious Dietary Requirements
                'jain food', 'jain meal', 'no onion garlic', 'satvik food',
                'halal food', 'halal certified', 'muslim dietary', 'zabihah',
                'kosher food', 'jewish dietary', 'kosher certified',
                'hindu dietary', 'no beef', 'no pork', 'religious food',
                
                // Medical Dietary Needs
                'diabetic food', 'sugar free', 'low sugar', 'no sugar',
                'low salt', 'no salt', 'salt free', 'low sodium',
                'low oil', 'oil free', 'fat free', 'low fat',
                'gluten free', 'wheat free', 'celiac diet', 'gluten intolerant',
                'dairy free', 'lactose free', 'milk free', 'lactose intolerant',
                
                // Special Medical Diets
                'special diet', 'medical diet', 'therapeutic diet', 'prescribed diet',
                'heart patient diet', 'kidney patient diet', 'liver patient diet',
                'hypertension diet', 'low cholesterol', 'keto diet', 'protein diet',
                'low carb', 'high fiber', 'soft diet', 'liquid diet',
                
                // Age-specific Dietary Needs
                'baby food', 'infant food', 'child food', 'kids meal',
                'elderly food', 'senior citizen food', 'soft food for elderly',
                'easy to digest', 'bland food', 'simple food',
                
                // Allergy-related Dietary Needs
                'nut free', 'peanut free', 'tree nut free', 'seafood free',
                'shellfish free', 'soy free', 'sesame free', 'food allergy',
                'allergy friendly', 'allergen free', 'hypoallergenic'
            ],
            departments: ['Premium Catering Team']
        },
        {
            name: 'Food Types',
            keywords: [
                // Complete Meals
                'meal', 'full meal', 'complete meal', 'thali', 'combo meal',
                'set meal', 'fixed meal', 'standard meal', 'regular meal',
                'economy meal', 'premium meal', 'deluxe meal', 'special meal',
                
                // Indian Cuisine
                'biryani', 'pulao', 'fried rice', 'curry', 'sabzi', 'dal',
                'rice', 'jeera rice', 'plain rice', 'sambar rice', 'curd rice',
                'roti', 'chapati', 'naan', 'paratha', 'puri', 'bread',
                'idli', 'dosa', 'vada', 'uttapam', 'sambhar', 'rasam',
                
                // Regional Cuisines
                'south indian', 'north indian', 'punjabi', 'gujarati', 'rajasthani',
                'bengali', 'maharashtrian', 'tamil', 'kerala', 'andhra',
                'chinese', 'indo chinese', 'continental', 'mexican', 'italian',
                
                // Snacks and Light Food
                'sandwich', 'burger', 'pizza', 'pasta', 'noodles', 'maggi',
                'samosa', 'kachori', 'vada pav', 'pav bhaji', 'chaat',
                'bhel puri', 'sev puri', 'dahi puri', 'aloo tikki',
                'cutlet', 'pakora', 'bonda', 'bajji', 'poha', 'upma',
                
                // Sweets and Desserts
                'sweet', 'dessert', 'halwa', 'kheer', 'gulab jamun',
                'rasgulla', 'rasmalai', 'laddu', 'barfi', 'ice cream',
                'kulfi', 'cake', 'pastry', 'cookies', 'biscuits',
                
                // Beverages
                'tea', 'chai', 'masala chai', 'coffee', 'filter coffee',
                'cold coffee', 'juice', 'fresh juice', 'soft drinks',
                'cold drinks', 'water', 'mineral water', 'buttermilk',
                'lassi', 'milkshake', 'coconut water', 'tender coconut',
                
                // Breakfast Items
                'breakfast', 'morning meal', 'breakfast combo', 'breakfast thali',
                'bread butter', 'bread jam', 'omelette', 'boiled eggs',
                'cornflakes', 'cereals', 'milk', 'fruits', 'banana',
                
                // Fast Food
                'fast food', 'quick meal', 'ready to eat', 'instant food',
                'packaged food', 'frozen food', 'canned food', 'processed food'
            ],
            departments: ['IRCTC E-Catering Team']
        },
        {
            name: 'Dining Experience',
            keywords: [
                // Dining Facilities
                'dining car', 'restaurant car', 'food court', 'cafeteria',
                'pantry car dining', 'dining area', 'eating area', 'food hall',
                'dining facility', 'restaurant facility', 'meal area',
                
                // Eating Experience
                'hungry', 'appetite', 'hunger', 'starving', 'famished',
                'eating experience', 'dining experience', 'meal experience',
                'food experience', 'culinary experience', 'gastronomic experience',
                
                // Taste and Flavor
                'taste', 'flavor', 'flavour', 'spicy', 'mild', 'hot', 'bland',
                'salty', 'sweet', 'bitter', 'sour', 'tangy', 'umami',
                'delicious', 'tasty', 'yummy', 'scrumptious', 'lip smacking',
                'mouth watering', 'appetizing', 'flavorful', 'tasteless',
                
                // Food Texture and Temperature
                'crispy', 'crunchy', 'soft', 'tender', 'chewy', 'hard',
                'mushy', 'creamy', 'smooth', 'rough', 'grainy', 'lumpy',
                'hot food', 'warm food', 'cold food', 'room temperature',
                'steaming hot', 'piping hot', 'freshly prepared',
                
                // Presentation and Serving
                'presentation', 'food presentation', 'plating', 'garnish',
                'serving style', 'portion size', 'food appearance', 'visual appeal',
                'attractive serving', 'neat serving', 'messy serving',
                'proper serving', 'good presentation', 'poor presentation',
                
                // Service Quality
                'service quality', 'serving quality', 'hospitality', 'courtesy',
                'polite service', 'friendly service', 'prompt service',
                'quick service', 'slow service', 'delayed service',
                'attentive service', 'caring service', 'professional service',
                
                // Ambiance and Environment
                'dining ambiance', 'eating environment', 'cleanliness',
                'hygiene', 'neat and clean', 'comfortable seating',
                'pleasant atmosphere', 'dining comfort', 'eating comfort',
                'peaceful dining', 'noisy environment', 'crowded dining',
                
                // Satisfaction and Rating
                'satisfied', 'dissatisfied', 'happy', 'unhappy', 'pleased',
                'disappointed', 'excellent', 'good', 'average', 'poor',
                'rating', 'review', 'feedback', 'recommendation',
                'would recommend', 'would not recommend', 'worth it', 'not worth it'
            ],
            departments: ['Premium Catering Team']
        }
    ],
    priority: 'high',
    confidence: 0.85
},

// ----------------------------

'Technical Issues': {
    subcategories: [
        {
            name: 'Website/Portal Issues',
            keywords: [
                // General Website Issues
                'website error', 'website not working', 'website down', 'website slow',
                'portal error', 'portal problem', 'portal not loading', 'portal crashed',
                'website crash', 'website freeze', 'website hang', 'website stuck',
                'page not loading', 'page error', 'page crash', 'blank page',
                
                // IRCTC Specific
                'IRCTC website down', 'IRCTC not working', 'IRCTC error', 'IRCTC slow',
                'IRCTC portal error', 'IRCTC website error', 'IRCTC loading issue',
                'irctc.co.in not working', 'irctc.in error', 'IRCTC site down',
                'IRCTC maintenance', 'IRCTC under maintenance', 'IRCTC server busy',
                
                // Server Issues
                'server error', 'server down', 'server timeout', 'server busy',
                'server unavailable', 'server not responding', 'server overload',
                'server maintenance', 'server crash', 'backend server error',
                'web server error', 'application server error', 'database server error',
                
                // HTTP and Network Errors
                'HTTP error', '404 error', '500 error', '502 error', '503 error',
                'gateway timeout', 'NGET error', 'internal server error',
                'bad gateway', 'service unavailable', 'request timeout',
                'connection refused', 'network timeout', 'DNS error',
                
                // Performance Issues
                'website loading slow', 'slow response', 'page loading forever',
                'website hanging', 'infinite loading', 'endless loading',
                'page takes too long', 'slow website', 'performance issue',
                'website lag', 'delayed response', 'response time high',
                
                // Railway Specific Portals
                'Rail Madad not working', 'UTS app portal error', 'NGET portal down',
                'PRS portal error', 'reservation portal down', 'booking portal error',
                'enquiry portal not working', 'complaint portal error',
                
                // Portal Navigation Issues
                'menu not working', 'navigation error', 'link not working',
                'button not working', 'redirect error', 'routing error',
                'URL error', 'hyperlink broken', 'broken link'
            ],
            departments: ['Web Portal Backend Support']
        },
        {
            name: 'App Issues',
            keywords: [
                // General App Problems
                'app crash', 'app error', 'app not working', 'app slow', 'app hanging',
                'app freeze', 'app stuck', 'app not responding', 'app killed',
                'application crash', 'mobile application error', 'app malfunction',
                
                // Platform Specific
                'mobile app', 'android app', 'iOS app', 'iPhone app', 'iPad app',
                'smartphone app', 'tablet app', 'android application', 'iOS application',
                'google play app', 'app store app', 'play store app',
                
                // IRCTC and Railway Apps
                'IRCTC app crash', 'IRCTC app error', 'IRCTC app not working',
                'Rail Connect app', 'UTS app error', 'Rail Madad app crash',
                'IRCTC Rail Connect', 'Indian Railway app', 'railway booking app',
                'train booking app error', 'ticket booking app crash',
                
                // App Lifecycle Issues
                'app update', 'app version', 'app upgrade', 'app update failed',
                'app installation', 'app install error', 'app download', 'app download failed',
                'app won\'t install', 'app installation failed', 'cannot install app',
                'app store error', 'play store error', 'download from store failed',
                
                // App Performance
                'app loading', 'app loading slow', 'app freezing', 'app response slow',
                'app lag', 'app performance issue', 'app memory error',
                'app storage issue', 'app space issue', 'insufficient storage',
                
                // App Function Issues
                'app feature not working', 'app button not working', 'app screen blank',
                'app display issue', 'app layout problem', 'app interface error',
                'app navigation error', 'app menu not working', 'app search not working',
                
                // App Permissions and Access
                'app permission error', 'app access denied', 'app camera not working',
                'app location not working', 'app notification not working',
                'app background issue', 'app sync error', 'app data sync failed',
                
                // Operating System Issues
                'android compatibility', 'iOS compatibility', 'app OS error',
                'operating system error', 'device compatibility', 'phone compatibility',
                'tablet compatibility', 'version compatibility', 'OS update conflict'
            ],
            departments: ['IT Support Level 1']
        },
        {
            name: 'Login/Authentication Issues',
            keywords: [
                // Login Failures
                'login failed', 'login error', 'login problem', 'cannot login',
                'unable to login', 'login not working', 'login issue', 'sign in failed',
                'sign in error', 'log in problem', 'authentication failed',
                'access denied', 'login denied', 'authorization failed',
                
                // Username and Password Issues
                'username error', 'user ID error', 'username not recognized',
                'password error', 'wrong password', 'password incorrect',
                'invalid password', 'password not accepted', 'password mismatch',
                'forgot password', 'password reset', 'reset password',
                'password recovery', 'password forgotten', 'lost password',
                
                // Account Status Issues
                'account locked', 'account blocked', 'account suspended',
                'account disabled', 'account deactivated', 'account expired',
                'account not found', 'user not found', 'invalid account',
                'account verification failed', 'account not verified',
                
                // Session Management
                'session expired', 'session timeout', 'session invalid',
                'logout error', 'auto logout', 'session terminated',
                'session disconnected', 'session lost', 'session conflict',
                'multiple sessions', 'concurrent login', 'session hijack',
                
                // OTP and Verification Issues
                'OTP not received', 'OTP expired', 'OTP error', 'OTP invalid',
                'verification failed', 'mobile verification error', 'email verification failed',
                'SMS not received', 'verification code error', 'authentication code error',
                'two factor authentication error', '2FA error', 'mobile OTP failed',
                
                // CAPTCHA Issues
                'captcha error', 'captcha not visible', 'captcha invalid',
                'captcha not loading', 'captcha expired', 'captcha verification failed',
                'image captcha error', 'audio captcha error', 'recaptcha error',
                
                // Security Questions
                'security question', 'security answer wrong', 'security verification failed',
                'challenge question error', 'identity verification failed',
                
                // IRCTC Specific Login Issues
                'IRCTC login failed', 'IRCTC password error', 'IRCTC account locked',
                'IRCTC user ID error', 'IRCTC sign in problem', 'IRCTC authentication error',
                'railway login error', 'Rail Connect login failed', 'UTS login error',
                
                // Biometric and Advanced Auth
                'fingerprint login failed', 'face recognition error', 'biometric error',
                'touch ID error', 'face ID error', 'smart card error',
                'digital certificate error', 'token authentication failed'
            ],
            departments: ['IT Support Level 1']
        },
        {
            name: 'Payment Gateway Issues',
            keywords: [
                // General Payment Errors
                'payment gateway error', 'payment processing error', 'payment timeout',
                'payment declined', 'payment failed', 'payment not processed',
                'payment stuck', 'payment pending', 'payment unsuccessful',
                'payment abort', 'payment cancel', 'payment incomplete',
                
                // Transaction Issues
                'transaction error', 'transaction timeout', 'transaction failed',
                'transaction declined', 'transaction not processed', 'transaction stuck',
                'transaction pending', 'transaction cancelled', 'transaction abort',
                'double transaction', 'duplicate transaction', 'multiple transactions',
                
                // Bank Related Errors
                'bank error', 'bank server error', 'bank timeout', 'bank decline',
                'banking error', 'net banking error', 'internet banking failed',
                'bank website error', 'bank portal error', 'bank authentication failed',
                'insufficient funds', 'account balance low', 'overdraft error',
                
                // Card Payment Issues
                'card error', 'credit card error', 'debit card error', 'card declined',
                'card not accepted', 'card expired', 'card blocked', 'card invalid',
                'card verification failed', 'CVV error', 'card number invalid',
                'card limit exceeded', 'daily limit exceeded', 'transaction limit exceeded',
                
                // Digital Wallet Errors
                'wallet error', 'digital wallet error', 'e-wallet error', 'wallet payment failed',
                'Paytm error', 'PhonePe error', 'Google Pay error', 'GPay error',
                'Amazon Pay error', 'Mobikwik error', 'Freecharge error',
                'wallet balance insufficient', 'wallet not linked', 'wallet verification failed',
                
                // UPI Issues
                'UPI error', 'UPI failed', 'UPI payment error', 'UPI timeout',
                'UPI not working', 'UPI server error', 'UPI transaction failed',
                'BHIM UPI error', 'UPI PIN error', 'UPI ID error',
                'VPA error', 'UPI handle error', 'UPI authentication failed',
                
                // EMI and Loan Issues
                'EMI failed', 'EMI error', 'EMI not processed', 'EMI declined',
                'loan payment error', 'installment error', 'financing error',
                'BNPL error', 'buy now pay later error', 'credit line error',
                
                // Payment Gateway Specific
                'Razorpay error', 'PayU error', 'CCAvenue error', 'Billdesk error',
                'Citrus Pay error', 'Atom error', 'gateway timeout error',
                'gateway server error', 'payment gateway down', 'gateway unavailable',
                
                // IRCTC Payment Issues
                'IRCTC payment failed', 'IRCTC transaction error', 'IRCTC gateway error',
                'railway payment error', 'train booking payment failed',
                'ticket payment error', 'booking payment declined',
                
                // Payment Status Issues
                'payment status unknown', 'payment verification failed', 'payment confirmation pending',
                'payment receipt not generated', 'payment proof missing', 'refund pending'
            ],
            departments: ['Payment Gateway Support']
        },
        {
            name: 'Form/Function Issues',
            keywords: [
                // Form Submission Issues
                'form error', 'form not submitting', 'form submission failed',
                'form not working', 'submit button not working', 'form freeze',
                'form hang', 'form timeout', 'form data lost', 'form reset error',
                'form validation error', 'form field error', 'mandatory field error',
                
                // Validation Issues
                'validation failed', 'field validation error', 'input validation error',
                'data validation failed', 'format validation error', 'email validation error',
                'phone number validation error', 'PNR validation error', 'train number validation error',
                'date validation error', 'time validation error', 'age validation error',
                
                // File Operations
                'file upload error', 'file not uploading', 'upload failed', 'upload timeout',
                'attachment error', 'file size error', 'file format error', 'file type error',
                'image upload error', 'document upload error', 'PDF upload error',
                'file corrupted', 'upload interrupted', 'file selection error',
                
                // Download Issues
                'download error', 'download failed', 'download timeout', 'download interrupted',
                'file download error', 'cannot download', 'download not starting',
                'download stuck', 'download slow', 'download incomplete',
                'broken download', 'corrupted download', 'download permission denied',
                
                // Print Issues
                'print error', 'printing failed', 'print not working', 'printer error',
                'print preview error', 'print format error', 'print layout error',
                'cannot print', 'print job failed', 'print queue error',
                
                // PDF and Document Issues
                'PDF error', 'PDF not opening', 'PDF corrupted', 'PDF blank',
                'PDF generation error', 'PDF download error', 'PDF format error',
                'document error', 'document not loading', 'document corrupted',
                
                // Ticket Download Specific
                'ticket download error', 'e-ticket download failed', 'ticket PDF error',
                'ticket generation failed', 'ticket file corrupted', 'ticket not downloadable',
                'boarding pass download error', 'reservation slip error',
                
                // Search and Filter Issues
                'search not working', 'search error', 'search results error',
                'filter not working', 'sort not working', 'dropdown error',
                'selection error', 'checkbox error', 'radio button error',
                
                // IRCTC Form Issues
                'IRCTC booking form error', 'passenger details form error', 'payment form error',
                'registration form error', 'profile update form error', 'contact form error',
                'complaint form error', 'feedback form error',
                
                // Data Entry Issues
                'text input error', 'number input error', 'date picker error',
                'dropdown selection error', 'autocomplete error', 'suggestion error',
                'keyboard input error', 'copy paste error', 'data entry error'
            ],
            departments: ['Web Portal Backend Support']
        },
        {
            name: 'Browser/Compatibility Issues',
            keywords: [
                // General Browser Issues
                'browser error', 'browser not supported', 'browser compatibility',
                'compatibility issue', 'browser version error', 'old browser',
                'browser update required', 'unsupported browser', 'browser crash',
                'browser freeze', 'browser hang', 'browser slow',
                
                // Specific Browser Issues
                'internet explorer', 'IE error', 'IE not supported', 'IE compatibility',
                'chrome error', 'Google Chrome error', 'chrome crash', 'chrome freeze',
                'firefox error', 'Mozilla Firefox error', 'firefox crash', 'firefox hang',
                'safari error', 'Safari browser error', 'safari compatibility',
                'edge error', 'Microsoft Edge error', 'edge compatibility',
                
                // Mobile Browser Issues
                'mobile browser error', 'smartphone browser issue', 'tablet browser error',
                'mobile chrome error', 'mobile safari error', 'mobile firefox error',
                'responsive design issue', 'mobile view error', 'touch interface error',
                
                // JavaScript Issues
                'javascript error', 'JS error', 'script error', 'javascript disabled',
                'javascript not working', 'script not loading', 'script timeout',
                'console error', 'runtime error', 'syntax error', 'reference error',
                
                // CSS and Display Issues
                'CSS error', 'style error', 'stylesheet error', 'CSS not loading',
                'display error', 'layout error', 'formatting error', 'alignment error',
                'responsive error', 'media query error', 'style sheet missing',
                
                // Plugin and Extension Issues
                'plugin error', 'browser plugin not working', 'extension error',
                'addon error', 'flash error', 'Java plugin error', 'ActiveX error',
                'browser extension conflict', 'plugin crash', 'plugin not supported',
                
                // Security and Privacy Settings
                'security settings error', 'privacy settings issue', 'cookie error',
                'popup blocked', 'popup blocker', 'ad blocker issue', 'script blocker',
                'security certificate error', 'SSL error', 'HTTPS error',
                
                // Cache and Storage Issues
                'cache error', 'browser cache issue', 'clear cache', 'storage error',
                'local storage error', 'session storage error', 'cookie storage error',
                'cache corrupted', 'temporary files error', 'browser data error',
                
                // Feature Support Issues
                'feature not supported', 'HTML5 error', 'WebRTC error', 'geolocation error',
                'camera access error', 'microphone access error', 'notification error',
                'offline mode error', 'service worker error', 'web worker error',
                
                // Operating System Browser Issues
                'Windows browser error', 'Mac browser error', 'Linux browser error',
                'Android browser error', 'iOS browser error', 'OS compatibility issue'
            ],
            departments: ['IT Support Level 1']
        },
        {
            name: 'Network/Connectivity Issues',
            keywords: [
                // Internet Connection Issues
                'internet connection', 'no internet', 'internet not working', 'connection lost',
                'network error', 'network not available', 'network timeout', 'network failure',
                'connection timeout', 'connection refused', 'connection interrupted',
                'connection unstable', 'intermittent connection', 'poor connection',
                
                // Speed and Performance
                'slow internet', 'internet speed slow', 'network speed issue', 'bandwidth issue',
                'connectivity issue', 'network congestion', 'traffic congestion',
                'throttling', 'speed limitation', 'data limit exceeded',
                'connection lag', 'high latency', 'network delay',
                
                // WiFi Issues
                'wifi error', 'wifi not working', 'wifi connection failed', 'wifi timeout',
                'wireless error', 'wifi signal weak', 'wifi disconnected', 'wifi unstable',
                'wifi password error', 'wifi authentication failed', 'wifi security error',
                'router error', 'modem error', 'access point error',
                
                // Mobile Data Issues
                'mobile data', 'mobile network error', 'cellular error', 'data connection failed',
                'mobile internet error', 'SIM card error', 'network provider error',
                'carrier error', 'signal strength weak', 'no signal', 'network coverage poor',
                
                // Network Technology Issues
                '4G error', '4G not working', '4G slow', '4G connection failed',
                '5G error', '5G not working', '5G slow', '5G connectivity issue',
                '3G error', '2G error', 'LTE error', 'EDGE error', 'GPRS error',
                
                // DNS and Server Issues
                'DNS error', 'DNS resolution failed', 'DNS timeout', 'DNS not found',
                'domain not found', 'hostname error', 'IP address error',
                'routing error', 'gateway error', 'proxy error', 'firewall error',
                
                // ISP and Provider Issues
                'ISP error', 'internet service provider error', 'ISP down', 'ISP outage',
                'broadband error', 'fiber error', 'cable connection error',
                'DSL error', 'dial-up error', 'leased line error',
                
                // Railway Station Network Issues
                'railway wifi error', 'station wifi not working', 'platform wifi error',
                'train wifi error', 'onboard internet error', 'railway internet slow',
                'station network error', 'platform connectivity issue',
                
                // VPN and Security Issues
                'VPN error', 'virtual private network error', 'VPN connection failed',
                'VPN slow', 'security connection error', 'encrypted connection error',
                'SSL connection error', 'TLS error', 'certificate error',
                
                // Network Configuration Issues
                'IP configuration error', 'DHCP error', 'subnet error', 'port error',
                'protocol error', 'TCP error', 'UDP error', 'HTTP connection error',
                'HTTPS connection error', 'FTP error', 'SMTP error'
            ],
            departments: ['IT Support Level 1']
        },
        {
            name: 'System Issues',
            keywords: [
                // General System Problems
                'system error', 'system not working', 'system failure', 'system crash',
                'system down', 'system unavailable', 'system offline', 'system timeout',
                'system overload', 'system busy', 'system hang', 'system freeze',
                
                // Maintenance and Updates
                'system maintenance', 'system under maintenance', 'scheduled maintenance',
                'system update', 'system upgrade', 'system patching', 'system reboot',
                'system restart', 'maintenance window', 'planned downtime',
                'emergency maintenance', 'unscheduled maintenance',
                
                // Database Issues
                'database error', 'database not available', 'database timeout',
                'database connection failed', 'database server error', 'DB error',
                'data not found', 'data missing', 'data corruption', 'data integrity error',
                'database lock', 'database deadlock', 'query timeout', 'SQL error',
                
                // Data Synchronization
                'sync error', 'synchronization failed', 'data sync error', 'sync timeout',
                'data not syncing', 'sync conflict', 'sync interrupted',
                'real-time sync error', 'batch sync error', 'incremental sync error',
                
                // Backup and Recovery
                'backup error', 'backup failed', 'backup not working', 'backup corruption',
                'restore error', 'restore failed', 'recovery error', 'recovery timeout',
                'data recovery failed', 'backup file corrupted', 'restore incomplete',
                
                // Migration Issues
                'migration error', 'data migration failed', 'migration timeout',
                'migration incomplete', 'upgrade migration error', 'legacy system error',
                'compatibility error', 'version migration error', 'platform migration error',
                
                // Railway System Specific
                'PRS system error', 'passenger reservation system down', 'PRS timeout',
                'NGET system error', 'railway network error', 'CRIS system error',
                'train scheduling system error', 'wagon tracking system error',
                'freight system error', 'signal system error', 'communication system error',
                
                // Integration Issues
                'API error', 'web service error', 'integration error', 'interface error',
                'microservice error', 'service unavailable', 'endpoint error',
                'REST API error', 'SOAP error', 'XML error', 'JSON error',
                
                // Performance Issues
                'system performance issue', 'system slow', 'response time high',
                'throughput low', 'system lag', 'processing delay', 'queue overflow',
                'memory error', 'CPU overload', 'disk space error', 'storage full',
                
                // Security System Issues
                'security system error', 'authentication system down', 'authorization error',
                'access control error', 'permission system error', 'encryption error',
                'security certificate expired', 'firewall error', 'intrusion detection error',
                
                // Monitoring and Alerting
                'monitoring system error', 'alert system down', 'notification system error',
                'logging system error', 'audit system error', 'reporting system down',
                'dashboard error', 'metrics system error', 'analytics system down'
            ],
            departments: ['Web Portal Backend Support']
        }
    ],
    priority: 'high',
    confidence: 0.8
},

// ----------------------------
'Staff Behavior': {
    subcategories: [
        {
            name: 'Misconduct',
            keywords: [
                // General Misconduct
                'TTE misbehaved', 'staff rude', 'employee misconduct', 'staff misconduct',
                'inappropriate behavior', 'unprofessional behavior', 'rude behavior',
                'misbehavior', 'bad behavior', 'unethical behavior', 'corrupt behavior',
                
                // Corruption and Bribery
                'bribery', 'corruption', 'bribe', 'money demand', 'illegal money',
                'under table payment', 'extra money demand', 'kickback', 'illegal gratification',
                'corrupt practices', 'unethical practices', 'dishonest behavior',
                'financial misconduct', 'monetary exploitation', 'illegal charges',
                
                // Abuse of Power
                'abuse of power', 'power misuse', 'authority misuse', 'position abuse',
                'official misconduct', 'dereliction of duty', 'negligence of duty',
                'violation of rules', 'rule breaking', 'procedure violation',
                'policy violation', 'protocol breach', 'unauthorized actions',
                
                // Criminal Behavior
                'theft by staff', 'stealing', 'criminal behavior', 'illegal activity',
                'fraud', 'cheating', 'forgery', 'embezzlement', 'misappropriation',
                'criminal negligence', 'willful negligence', 'deliberate harm',
                
                // Workplace Violations
                'drunk on duty', 'intoxicated', 'alcohol on duty', 'substance abuse',
                'sleeping on duty', 'absent from duty', 'dereliction', 'abandoning duty',
                'irresponsible behavior', 'careless behavior', 'reckless behavior',
                
                // Professional Misconduct
                'professional misconduct', 'code of conduct violation', 'ethics violation',
                'disciplinary violation', 'breach of trust', 'breach of confidence',
                'conflict of interest', 'favoritism', 'nepotism', 'bias'
            ],
            departments: ['HR Disciplinary Team']
        },
        {
            name: 'Staff Roles',
            keywords: [
                // Train Staff
                'TTE', 'traveling ticket examiner', 'ticket collector', 'ticket examiner',
                'train conductor', 'guard', 'train guard', 'assistant guard',
                'loco pilot', 'driver', 'train driver', 'engine driver', 'motorman',
                'assistant loco pilot', 'ALP', 'fireman', 'train operator',
                
                // Station Staff
                'station master', 'ASM', 'assistant station master', 'SM',
                'booking clerk', 'reservation clerk', 'enquiry clerk', 'ticket clerk',
                'counter clerk', 'booking office staff', 'reservation office staff',
                'platform staff', 'platform inspector', 'platform supervisor',
                
                // Commercial Staff
                'commercial clerk', 'goods clerk', 'parcel clerk', 'luggage clerk',
                'catering staff', 'pantry staff', 'food service staff', 'vendor',
                'canteen staff', 'refreshment staff', 'meal service staff',
                
                // Maintenance Staff
                'cleaning staff', 'housekeeping staff', 'sweeper', 'cleaner',
                'maintenance staff', 'technical staff', 'mechanic', 'technician',
                'fitter', 'electrician', 'welder', 'carpenter', 'painter',
                
                // Security Staff
                'security staff', 'security guard', 'RPF', 'railway protection force',
                'GRP', 'government railway police', 'CISF', 'police constable',
                'security officer', 'security inspector', 'watchman', 'guard',
                
                // Administrative Staff
                'railway employee', 'railway staff', 'railway officer', 'supervisor',
                'section officer', 'department head', 'branch officer', 'clerk',
                'assistant', 'stenographer', 'typist', 'data entry operator',
                
                // Operational Staff
                'pointsman', 'signal man', 'gateman', 'cabin man', 'levelman',
                'track man', 'gang man', 'porter', 'coolie', 'luggage porter',
                'announcer', 'PA operator', 'information clerk', 'help desk staff',
                
                // Medical Staff
                'railway doctor', 'medical officer', 'nurse', 'pharmacist',
                'ambulance driver', 'paramedic', 'health assistant', 'compounder',
                
                // Higher Officials
                'DRM', 'divisional railway manager', 'GM', 'general manager',
                'chief engineer', 'chief medical officer', 'chief security officer',
                'chief commercial manager', 'chief personnel officer'
            ],
            departments: ['Employee Grievance Cell']
        },
        {
            name: 'Positive Behavior',
            keywords: [
                // Appreciation Terms
                'helpful staff', 'good service', 'courteous behavior', 'polite staff',
                'excellent service', 'staff appreciation', 'thank you', 'grateful',
                'kind staff', 'supportive staff', 'cooperative staff', 'friendly staff',
                
                // Service Excellence
                'outstanding service', 'exceptional service', 'remarkable service',
                'professional service', 'prompt service', 'efficient service',
                'dedicated service', 'committed service', 'reliable service',
                'quality service', 'satisfactory service', 'smooth service',
                
                // Staff Qualities
                'honest staff', 'trustworthy staff', 'responsible staff', 'dutiful staff',
                'punctual staff', 'disciplined staff', 'well behaved staff',
                'courteous staff', 'respectful staff', 'understanding staff',
                'patient staff', 'caring staff', 'compassionate staff',
                
                // Positive Actions
                'staff helped', 'staff assisted', 'staff guided', 'staff supported',
                'went extra mile', 'beyond duty', 'additional help', 'special assistance',
                'problem solved', 'issue resolved', 'quick response', 'immediate help',
                
                // Recognition
                'commendable', 'praiseworthy', 'exemplary', 'model behavior',
                'best practices', 'role model', 'inspiring', 'motivating',
                'appreciate effort', 'acknowledge service', 'recognize contribution',
                
                // Gratitude Expressions
                'thankful', 'grateful', 'appreciate', 'kudos', 'well done',
                'congratulations', 'thumbs up', 'excellent work', 'job well done',
                'keep it up', 'proud of', 'impressed with', 'satisfied with'
            ],
            departments: ['HR Recognition Team']
        },
        {
            name: 'Negative Behavior',
            keywords: [
                // Rudeness and Arrogance
                'rude staff', 'arrogant staff', 'disrespectful staff', 'abusive staff',
                'threatening staff', 'intimidating staff', 'aggressive staff',
                'hostile staff', 'unfriendly staff', 'impolite staff', 'discourteous staff',
                'insulting staff', 'offensive staff', 'contemptuous staff',
                
                // Discriminatory Behavior
                'discriminatory behavior', 'biased behavior', 'favoritism', 'partiality',
                'unfair treatment', 'differential treatment', 'prejudiced behavior',
                'caste discrimination', 'religious discrimination', 'gender discrimination',
                'racial discrimination', 'regional discrimination', 'linguistic discrimination',
                'age discrimination', 'class discrimination', 'economic discrimination',
                
                // Attitude Problems
                'bad attitude', 'negative attitude', 'careless attitude', 'casual attitude',
                'indifferent attitude', 'apathetic behavior', 'negligent attitude',
                'irresponsible attitude', 'unprofessional attitude', 'arrogant attitude',
                'superior complex', 'ego problem', 'attitude issue',
                
                // Behavioral Issues
                'misbehaving', 'ill treating', 'mistreating', 'maltreating',
                'harassing', 'bullying', 'taunting', 'mocking', 'ridiculing',
                'humiliating', 'embarrassing', 'shaming', 'degrading',
                
                // Communication Problems
                'shouting', 'yelling', 'screaming', 'raising voice', 'loud speaking',
                'harsh words', 'rough language', 'abusive language', 'foul language',
                'inappropriate comments', 'sarcastic remarks', 'cutting remarks',
                
                // Unethical Practices
                'unethical behavior', 'immoral behavior', 'dishonest behavior',
                'fraudulent behavior', 'deceptive behavior', 'manipulative behavior',
                'exploitative behavior', 'opportunistic behavior', 'selfish behavior'
            ],
            departments: ['HR Disciplinary Team']
        },
        {
            name: 'Service Issues',
            keywords: [
                // Service Quality
                'poor service', 'bad service', 'no service', 'delayed service',
                'slow service', 'inefficient service', 'unsatisfactory service',
                'substandard service', 'below par service', 'inadequate service',
                'incomplete service', 'partial service', 'half hearted service',
                
                // Service Denial
                'service denial', 'service refusal', 'service rejection', 'service declined',
                'refused to help', 'denied assistance', 'rejected request',
                'unwilling to serve', 'reluctant service', 'hesitant service',
                'avoided responsibility', 'passed the buck', 'shifted blame',
                
                // Service Attitude
                'service attitude', 'service behavior', 'service approach',
                'service mentality', 'service orientation', 'customer orientation',
                'passenger orientation', 'service mindset', 'service culture',
                
                // Service Standards
                'service quality', 'service standards', 'service level', 'service grade',
                'customer service', 'passenger service', 'public service',
                'service delivery', 'service provision', 'service offering',
                'service experience', 'service satisfaction', 'service expectation',
                
                // Work Ethic Issues
                'lazy staff', 'lethargic staff', 'unmotivated staff', 'disinterested staff',
                'careless staff', 'negligent staff', 'irresponsible staff',
                'casual approach', 'dont care attitude', 'callous behavior',
                
                // Availability Issues
                'staff not available', 'staff absent', 'staff missing', 'no staff present',
                'understaffed', 'shortage of staff', 'staff unavailable',
                'staff not at desk', 'staff not responding', 'staff busy',
                
                // Response Issues
                'delayed response', 'slow response', 'no response', 'late response',
                'inadequate response', 'inappropriate response', 'wrong response',
                'incomplete response', 'unclear response', 'confusing response'
            ],
            departments: ['Employee Grievance Cell']
        },
        {
            name: 'Communication Issues',
            keywords: [
                // Language Barriers
                'language barrier', 'language problem', 'language issue', 'language difficulty',
                'not speaking english', 'not speaking hindi', 'not speaking local language',
                'cannot understand', 'language confusion', 'translation problem',
                'accent problem', 'pronunciation issue', 'dialect difference',
                
                // Communication Problems
                'communication problem', 'communication gap', 'communication barrier',
                'miscommunication', 'communication failure', 'communication breakdown',
                'poor communication', 'unclear communication', 'confusing communication',
                
                // Listening Issues
                'not listening', 'not paying attention', 'ignoring', 'dismissing',
                'turning deaf ear', 'not hearing', 'selective hearing',
                'inattentive', 'distracted', 'preoccupied', 'absent minded',
                
                // Response Issues
                'not responding', 'no reply', 'silent treatment', 'avoiding questions',
                'evasive answers', 'incomplete answers', 'vague responses',
                'unclear responses', 'confusing answers', 'contradictory responses',
                
                // Attitude in Communication
                'dismissive', 'condescending', 'patronizing', 'talking down',
                'superior tone', 'arrogant tone', 'rude tone', 'harsh tone',
                'cold behavior', 'distant behavior', 'aloof behavior',
                
                // Verbal Aggression
                'shouting', 'yelling', 'screaming', 'raising voice', 'loud talking',
                'arguing', 'quarreling', 'fighting', 'verbal fight',
                'heated argument', 'angry exchange', 'confrontation',
                
                // Information Issues
                'wrong information', 'incomplete information', 'misleading information',
                'false information', 'outdated information', 'inaccurate information',
                'contradictory information', 'confusing information', 'unclear instructions'
            ],
            departments: ['Employee Grievance Cell']
        },
        {
            name: 'Harassment',
            keywords: [
                // General Harassment
                'harassment', 'staff harassment', 'employee harassment', 'workplace harassment',
                'persistent harassment', 'continuous harassment', 'repeated harassment',
                'systematic harassment', 'targeted harassment', 'deliberate harassment',
                
                // Verbal Abuse
                'verbal abuse', 'verbal harassment', 'abusive language', 'foul language',
                'offensive language', 'inappropriate language', 'vulgar language',
                'profanity', 'swearing', 'cursing', 'name calling', 'verbal threats',
                
                // Physical Harassment
                'physical abuse', 'physical harassment', 'physical violence', 'hitting',
                'pushing', 'shoving', 'manhandling', 'rough handling', 'physical threats',
                'intimidation', 'threatening gestures', 'aggressive behavior',
                
                // Mental/Psychological Harassment
                'mental harassment', 'psychological harassment', 'emotional abuse',
                'mental torture', 'psychological pressure', 'emotional manipulation',
                'mental agony', 'psychological trauma', 'emotional distress',
                
                // Sexual Harassment
                'sexual harassment', 'inappropriate touching', 'unwanted advances',
                'sexual misconduct', 'sexual abuse', 'molestation', 'eve teasing',
                'inappropriate behavior', 'sexual comments', 'sexual jokes',
                'gender harassment', 'workplace sexual harassment',
                
                // Discrimination Based Harassment
                'racial harassment', 'caste harassment', 'religious harassment',
                'linguistic harassment', 'regional harassment', 'ethnic harassment',
                'communal harassment', 'sectarian harassment', 'cultural harassment',
                
                // Age and Gender Discrimination
                'age discrimination', 'ageism', 'gender discrimination', 'sexism',
                'gender bias', 'age bias', 'discrimination against elderly',
                'discrimination against women', 'discrimination against youth',
                
                // Economic Discrimination
                'class discrimination', 'economic discrimination', 'social discrimination',
                'discrimination based on status', 'discrimination based on background',
                'discrimination based on appearance', 'discrimination based on dress',
                
                // Other Forms
                'bullying', 'workplace bullying', 'intimidation', 'victimization',
                'persecution', 'oppression', 'exploitation', 'abuse of authority',
                'power harassment', 'position harassment', 'rank harassment'
            ],
            departments: ['HR Disciplinary Team']
        }
    ],
    priority: 'high',
    confidence: 0.9
},

// ----------------------------
'Cleanliness & Maintenance': {
    subcategories: [
        {
            name: 'Cleanliness Issues',
            keywords: [
                // General Cleanliness
                'dirty coach', 'unclean coach', 'filthy coach', 'messy coach', 'uncleaned coach',
                'dirty toilet', 'unclean toilet', 'filthy toilet', 'toilet smell', 'toilet stench',
                'washroom dirty', 'bathroom dirty', 'restroom dirty', 'lavatory dirty',
                'poor hygiene', 'unhygienic', 'unsanitary', 'contaminated', 'infectious',
                'garbage', 'trash', 'litter', 'rubbish', 'waste', 'debris', 'scattered waste',
                'smell', 'odor', 'stench', 'bad smell', 'foul smell', 'awful smell',
                
                // Bio-toilet Issues
                'bio toilet dirty', 'bio toilet smell', 'bio toilet not working', 'waste discharge',
                'human waste on track', 'toilet waste visible', 'sewage smell', 'septic smell',
                'bio toilet blocked', 'bio toilet overflow', 'toilet waste leak',
                
                // Station Cleanliness
                'platform dirty', 'station dirty', 'waiting room dirty', 'dirty platform',
                'station garbage', 'platform garbage', 'station littering', 'dirty station',
                'unclean platform', 'messy station', 'filthy platform', 'station hygiene',
                
                // Specific Areas
                'compartment dirty', 'berth dirty', 'seat dirty', 'floor dirty', 'window dirty',
                'door dirty', 'table dirty', 'aisle dirty', 'corridor dirty', 'entrance dirty',
                'pantry dirty', 'food area dirty', 'dining area dirty', 'serving area dirty',
                
                // Health Concerns
                'disease risk', 'infection risk', 'health hazard', 'bacterial infection',
                'viral infection', 'food poisoning risk', 'contamination risk'
            ],
            departments: ['Coaching Maintenance Team']
        },
        {
            name: 'Cleaning Issues',
            keywords: [
                // General Cleaning
                'not cleaned', 'cleaning delayed', 'cleaning staff', 'housekeeping', 'cleaning absent',
                'mopping', 'sweeping', 'dusting', 'sanitization', 'disinfection', 'cleaning frequency',
                'cleaning supplies', 'detergent', 'soap', 'tissue paper', 'toilet paper',
                
                // OBHS and Services
                'OBHS', 'on board housekeeping', 'clean my coach', 'cleaning service',
                'housekeeping service', 'cleaning request', 'SMS 58888', 'cleaning SMS',
                'cleaning staff not responding', 'cleaning staff absent', 'cleaner not available',
                'cleaning trolley', 'cleaning equipment', 'vacuum cleaner', 'mop bucket',
                
                // Mechanized Cleaning
                'mechanized cleaning', 'machine cleaning', 'automated cleaning', 'high pressure cleaning',
                'steam cleaning', 'deep cleaning', 'thorough cleaning', 'cleaning technology',
                'cleaning depot', 'coaching depot cleaning', 'rake cleaning',
                
                // Cleaning Schedule
                'cleaning schedule', 'cleaning timing', 'cleaning frequency', 'daily cleaning',
                'periodic cleaning', 'routine cleaning', 'scheduled cleaning', 'cleaning rounds',
                'cleaning shift', 'night cleaning', 'morning cleaning', 'cleaning cycle',
                
                // Cleaning Quality
                'poor cleaning', 'incomplete cleaning', 'rushed cleaning', 'superficial cleaning',
                'cleaning standards', 'cleaning quality', 'cleaning inspection', 'cleaning audit'
            ],
            departments: ['Coaching Maintenance Team']
        },
        {
            name: 'Maintenance Issues',
            keywords: [
                // General Maintenance
                'maintenance', 'repair', 'broken', 'damaged', 'faulty', 'not working',
                'out of order', 'needs repair', 'replacement needed', 'worn out', 'defective',
                'malfunction', 'breakdown', 'failure', 'equipment failure', 'system failure',
                
                // Infrastructure Aging
                'aging infrastructure', 'old equipment', 'outdated system', 'legacy equipment',
                'end of life', 'obsolete', 'deteriorated', 'degraded', 'worn infrastructure',
                'infrastructure decay', 'equipment aging', 'system obsolescence',
                
                // Maintenance Types
                'preventive maintenance', 'corrective maintenance', 'predictive maintenance',
                'emergency repair', 'routine maintenance', 'scheduled maintenance',
                'breakdown maintenance', 'condition based maintenance', 'periodic overhaul',
                
                // Environmental Damage
                'weather damage', 'rain damage', 'flood damage', 'storm damage', 'heat damage',
                'cold damage', 'moisture damage', 'humidity damage', 'corrosion', 'rust',
                'environmental wear', 'natural deterioration', 'climate impact',
                
                // Maintenance Resources
                'maintenance delay', 'maintenance pending', 'maintenance backlog', 'spare parts',
                'maintenance cost', 'maintenance budget', 'maintenance staff', 'technician',
                'maintenance schedule', 'maintenance window', 'downtime', 'outage'
            ],
            departments: ['Coaching Maintenance Team']
        },
        {
            name: 'Electrical Issues',
            keywords: [
                // Air Conditioning
                'AC not working', 'air conditioning', 'cooling', 'heating', 'temperature control',
                'AC failure', 'AC breakdown', 'no cooling', 'no heating', 'temperature issue',
                'AC compressor', 'AC unit', 'central AC', 'individual AC', 'AC vent',
                'AC filter', 'AC maintenance', 'AC repair', 'AC gas leak', 'AC noise',
                
                // Fans and Ventilation
                'fan not working', 'ceiling fan', 'exhaust fan', 'ventilation fan', 'fan failure',
                'fan noise', 'fan speed', 'fan blade', 'fan motor', 'air circulation',
                'ventilation', 'air flow', 'stuffy air', 'poor ventilation', 'airless',
                
                // Power Issues
                'no power', 'power cut', 'power failure', 'power outage', 'blackout',
                'electrical issue', 'electrical fault', 'electrical failure', 'electrical safety',
                'electrical hazard', 'electric shock', 'short circuit', 'overload',
                'voltage fluctuation', 'power quality', 'electrical fire', 'spark',
                
                // Lighting
                'light not working', 'bulb fused', 'tube light', 'LED light', 'lighting failure',
                'dim light', 'flickering light', 'no lighting', 'emergency light',
                'reading light', 'berth light', 'aisle light', 'compartment lighting',
                
                // Charging and Sockets
                'charging point', 'power socket', 'plug point', 'USB port', 'mobile charging',
                'laptop charging', 'charging failure', 'socket not working', 'USB not working',
                'charging cable', 'adapter', 'power bank charging', 'electronic device charging'
            ],
            departments: ['Electrical Team', 'AC Maintenance Team']
        },
        {
            name: 'Water Issues',
            keywords: [
                // Water Availability
                'water shortage', 'no water', 'water not available', 'water empty', 'water tank empty',
                'water supply', 'water refill', 'water filling', 'water replenishment',
                'insufficient water', 'water running out', 'water scarcity', 'water rationing',
                
                // Water Quality
                'water quality', 'dirty water', 'contaminated water', 'muddy water', 'cloudy water',
                'water color', 'water taste', 'water smell', 'water odor', 'bad water',
                'unsafe water', 'polluted water', 'impure water', 'brackish water',
                
                // Water Pressure and Flow
                'water pressure', 'low pressure', 'high pressure', 'water flow', 'weak flow',
                'no flow', 'water dripping', 'water trickling', 'water gushing', 'water force',
                
                // Water Systems
                'water tap', 'water faucet', 'water valve', 'water pump', 'water motor',
                'water tank', 'water reservoir', 'water storage', 'water pipeline',
                'water connection', 'water supply line', 'water distribution',
                
                // Water Problems
                'water leakage', 'water dripping', 'water overflow', 'water wastage',
                'water logging', 'water accumulation', 'water stagnation', 'drainage issue',
                'water backup', 'water reverse flow', 'water contamination source'
            ],
            departments: ['Coaching Maintenance Team']
        },
        {
            name: 'Plumbing Issues',
            keywords: [
                // General Plumbing
                'plumbing', 'plumbing failure', 'plumbing problem', 'plumbing issue',
                'plumbing repair', 'plumbing maintenance', 'plumbing blockage',
                
                // Pipe Issues
                'pipe leakage', 'pipe burst', 'pipe crack', 'pipe damage', 'pipe blockage',
                'pipe corrosion', 'pipe replacement', 'pipe repair', 'pipeline issue',
                'water pipe', 'sewage pipe', 'drain pipe', 'supply pipe',
                
                // Drainage
                'drain blocked', 'drainage problem', 'drain overflow', 'drain smell',
                'sewer blockage', 'sewage backup', 'drainage system', 'waste drainage',
                'floor drain', 'platform drain', 'roof drain', 'gutter blockage',
                
                // Toilet Fixtures
                'toilet flush', 'flush not working', 'flush button', 'flush mechanism',
                'water closet', 'commode', 'toilet seat', 'toilet bowl', 'toilet tank',
                'cistern', 'flush valve', 'float valve', 'toilet chain',
                
                // Washroom Fixtures
                'sink', 'basin', 'wash basin', 'tap', 'faucet', 'mixer tap',
                'shower', 'shower head', 'shower handle', 'geyser', 'water heater',
                'hot water', 'cold water', 'water temperature', 'thermostat',
                
                // Plumbing Noises
                'pipe noise', 'gurgling sound', 'water hammer', 'plumbing sound',
                'drain noise', 'flush noise', 'pipe vibration', 'water flow noise'
            ],
            departments: ['Coaching Maintenance Team']
        },
        {
            name: 'Structural Issues',
            keywords: [
                // Windows and Doors
                'window broken', 'window crack', 'window glass', 'window frame', 'window latch',
                'door broken', 'door damage', 'door alignment', 'door closing', 'door opening',
                'sliding door', 'entrance door', 'exit door', 'emergency door',
                
                // Locks and Hardware
                'lock broken', 'lock jammed', 'lock missing', 'key broken', 'latch broken',
                'handle broken', 'door handle', 'window handle', 'knob broken',
                'hinge problem', 'bolt broken', 'safety chain', 'door closer',
                
                // Seating and Berths
                'seat broken', 'seat damage', 'seat cushion', 'seat cover', 'seat frame',
                'berth broken', 'berth damage', 'berth support', 'berth chain', 'berth ladder',
                'sleeping berth', 'sitting berth', 'berth conversion', 'berth mechanism',
                
                // Tables and Fixtures
                'table broken', 'table damage', 'folding table', 'dining table', 'side table',
                'table support', 'table hinge', 'table lock', 'table surface',
                'mirror broken', 'mirror crack', 'mirror mounting', 'mirror frame',
                
                // Flooring and Surfaces
                'floor damaged', 'floor crack', 'floor tile', 'floor covering', 'floor repair',
                'wall damaged', 'wall crack', 'wall panel', 'wall covering', 'wall paint',
                'ceiling damaged', 'ceiling leak', 'ceiling panel', 'ceiling tile',
                
                // Paint and Coating
                'paint peeling', 'paint chipping', 'paint fading', 'paint damage',
                'coating wear', 'surface treatment', 'anti-rust coating', 'protective coating',
                
                // Material Degradation
                'rust', 'corrosion', 'oxidation', 'metal fatigue', 'material failure',
                'wear and tear', 'deterioration', 'aging material', 'structural fatigue',
                'stress crack', 'expansion joint', 'thermal expansion', 'vibration damage'
            ],
            departments: ['Coaching Maintenance Team']
        },
        {
            name: 'Pest Control',
            keywords: [
                // Insects
                'insects', 'cockroaches', 'roaches', 'ants', 'flies', 'mosquitoes',
                'beetles', 'bugs', 'bed bugs', 'termites', 'moths', 'wasps',
                'bees', 'spiders', 'centipedes', 'silverfish', 'crickets',
                
                // Rodents
                'rats', 'mice', 'rodents', 'squirrels', 'rat infestation',
                'mouse droppings', 'rodent damage', 'rodent control',
                
                // Reptiles and Others
                'lizards', 'geckos', 'snakes', 'frogs', 'toads', 'scorpions',
                
                // Pest Control Services
                'pest control', 'pest management', 'extermination', 'fumigation',
                'spraying', 'pest treatment', 'insecticide', 'pesticide',
                'rodenticide', 'pest inspection', 'pest prevention',
                
                // Pest Problems
                'infestation', 'pest nuisance', 'pest damage', 'pest bites',
                'pest droppings', 'pest nests', 'pest breeding', 'pest entry points',
                'pest hiding places', 'pest food sources', 'hygiene pests',
                
                // Specific Locations
                'kitchen pests', 'toilet pests', 'berth pests', 'compartment pests',
                'pantry pests', 'food area pests', 'storage area pests'
            ],
            departments: ['Coaching Maintenance Team']
        }
    ],
    priority: 'medium',
    confidence: 0.8
},

// ----------------------------
'Train Operations': {
    subcategories: [
        {
            name: 'Delays',
            keywords: [
                // General Delay Terms
                'train delay', 'delayed train', 'running late', 'late arrival', 'late departure',
                'delay', 'timing', 'schedule', 'punctuality', 'arrival time', 'departure time',
                'expected arrival', 'ETA', 'delayed by hours', 'delay of minutes', 'chronic delay',
                'frequent delays', 'habitual delay', 'delay pattern', 'delay compensation',
                
                // Weather-Related Delays
                'weather delay', 'fog delay', 'rain delay', 'storm delay', 'cyclone delay',
                'flood delay', 'heavy rainfall', 'monsoon delay', 'visibility poor',
                'dense fog', 'snowfall delay', 'extreme weather', 'adverse weather conditions',
                'weather disruption', 'climate impact', 'seasonal delay',
                
                // Technical Delays
                'technical delay', 'signal failure', 'signal malfunction', 'signal problem',
                'track problem', 'track defect', 'track maintenance', 'track repair',
                'engine failure', 'locomotive breakdown', 'mechanical failure', 'brake failure',
                'electrical failure', 'power failure', 'overhead line problem', 'pantograph issue',
                'coupling problem', 'wheel defect', 'axle problem', 'system failure',
                
                // Operational Delays
                'operational delay', 'traffic congestion', 'route congestion', 'line congestion',
                'crew delay', 'staff shortage', 'driver unavailable', 'guard missing',
                'late crew', 'crew change', 'pilot change', 'loco pilot delay',
                'resource shortage', 'rolling stock shortage', 'rake unavailable',
                
                // Infrastructure Delays
                'infrastructure delay', 'bridge repair', 'tunnel maintenance', 'platform work',
                'station work', 'signaling upgrade', 'track renewal', 'electrification work',
                'construction delay', 'engineering work', 'maintenance block', 'safety work',
                
                // External Factors
                'accident delay', 'emergency delay', 'security delay', 'law and order',
                'agitation delay', 'bandh effect', 'strike impact', 'protest delay',
                'VIP movement', 'special train priority', 'freight priority', 'goods train priority',
                
                // Passenger-Related Delays
                'boarding delay', 'passenger delay', 'crowd delay', 'overcrowding delay',
                'medical emergency delay', 'passenger illness', 'emergency chain pulling',
                'unauthorized stop', 'passenger fall', 'platform accident delay'
            ],
            departments: ['Operations Analytics Team']
        },
        {
            name: 'Cancellations',
            keywords: [
                // General Cancellation Terms
                'train cancelled', 'cancellation', 'trip cancelled', 'service cancelled',
                'train not running', 'train suspended', 'service suspended', 'route cancelled',
                'schedule cancelled', 'booking cancelled', 'journey cancelled', 'full cancellation',
                'partial cancellation', 'permanent cancellation', 'temporary cancellation',
                
                // Maintenance Cancellations
                'maintenance cancellation', 'repair work', 'track renewal work', 'signaling work',
                'electrification work', 'bridge work', 'tunnel work', 'infrastructure upgrade',
                'modernization work', 'safety upgrade', 'platform extension', 'station development',
                'mega block', 'power block', 'traffic block', 'engineering block',
                
                // Emergency Cancellations
                'emergency cancellation', 'accident cancellation', 'derailment cancellation',
                'flood cancellation', 'cyclone cancellation', 'natural disaster', 'calamity',
                'security threat', 'law and order problem', 'curfew', 'emergency situation',
                
                // Operational Cancellations
                'operational cancellation', 'resource unavailability', 'crew unavailable',
                'rake unavailable', 'locomotive unavailable', 'engine problem',
                'rolling stock shortage', 'path not available', 'line blocked',
                'route not clear', 'signal failure cancellation', 'technical fault',
                
                // Seasonal/Planned Cancellations
                'monsoon cancellation', 'winter cancellation', 'festival cancellation',
                'planned cancellation', 'scheduled cancellation', 'advance cancellation',
                'pre-planned work', 'annual maintenance', 'periodic maintenance',
                
                // Route-Specific Cancellations
                'section cancellation', 'divisional cancellation', 'zonal cancellation',
                'regional cancellation', 'branch line cancellation', 'suburban cancellation',
                'express cancellation', 'passenger train cancellation', 'goods train priority',
                
                // Notification Terms
                'cancellation notice', 'advance notice', 'short notice cancellation',
                'last minute cancellation', 'sudden cancellation', 'immediate cancellation',
                'cancellation update', 'service update', 'schedule change',
                
                // Impact Terms
                'alternative arrangement', 'bus service', 'refund policy', 'full refund',
                'cancellation charges', 'alternate train', 'next available train',
                'reschedule', 'rebooking', 'transfer booking'
            ],
            departments: ['System Monitoring Team']
        },
        {
            name: 'Diversions',
            keywords: [
                // General Diversion Terms
                'train diverted', 'route changed', 'diversion', 'alternate route', 'alternative route',
                'path change', 'track change', 'rescheduled', 'time change', 'route diversion',
                'line change', 'section change', 'via change', 'routing change',
                
                // Reasons for Diversion
                'traffic block', 'line block', 'route block', 'section block', 'accident diversion',
                'derailment diversion', 'flood diversion', 'bridge damage', 'track damage',
                'signal failure diversion', 'power failure diversion', 'overhead line damage',
                'infrastructure damage', 'emergency diversion', 'safety diversion',
                
                // Maintenance Diversions
                'maintenance diversion', 'repair work diversion', 'track work', 'signaling work',
                'electrification diversion', 'modernization work', 'upgrade work',
                'engineering work', 'construction diversion', 'development work',
                
                // Operational Diversions
                'operational diversion', 'congestion diversion', 'traffic management',
                'capacity optimization', 'line utilization', 'freight priority',
                'goods train movement', 'special train priority', 'VIP movement',
                
                // Geographic Diversions
                'bypass route', 'detour route', 'circuitous route', 'longer route',
                'shorter route', 'direct route', 'indirect route', 'via alternate stations',
                'station bypass', 'junction diversion', 'yard diversion',
                
                // Time Impact
                'delayed due to diversion', 'extra time', 'additional travel time',
                'extended journey', 'longer route time', 'time loss', 'schedule impact',
                
                // Passenger Impact
                'station skip', 'stop elimination', 'halt cancellation', 'pickup change',
                'boarding point change', 'destination change', 'intermediate stop change',
                'passenger inconvenience', 'boarding confusion', 'alighting confusion',
                
                // Information Updates
                'diversion notice', 'route update', 'schedule update', 'timing change',
                'platform change', 'announcement', 'passenger information', 'SMS update',
                'app notification', 'website update', 'information display'
            ],
            departments: ['High Density Route Support']
        },
        {
            name: 'Station Issues',
            keywords: [
                // General Station Terms
                'station', 'railway station', 'terminus', 'junction', 'halt',
                'station facilities', 'station amenities', 'station services', 'station infrastructure',
                'station building', 'station complex', 'station premises', 'station area',
                
                // Platform Issues
                'platform', 'platform number', 'platform change', 'platform confusion',
                'platform overcrowding', 'platform safety', 'platform facilities',
                'platform roof', 'platform shelter', 'platform lighting', 'platform cleanliness',
                'platform water', 'platform length', 'platform height', 'platform access',
                
                // Information Systems
                'announcement', 'PA system', 'public address', 'speaker', 'audio system',
                'information board', 'display board', 'LED board', 'indicator board',
                'train information', 'arrival board', 'departure board', 'real time information',
                'digital display', 'electronic board', 'notice board', 'information counter',
                
                // Station Amenities
                'waiting room', 'waiting hall', 'passenger waiting', 'seating arrangement',
                'retiring room', 'rest room', 'dormitory', 'accommodation', 'lodge',
                'cloak room', 'luggage room', 'baggage counter', 'parcel office',
                'left luggage', 'storage facility', 'locker facility',
                
                // Commercial Facilities
                'booking office', 'ticket counter', 'reservation counter', 'enquiry counter',
                'help desk', 'information desk', 'customer care', 'station master office',
                'food stall', 'tea stall', 'restaurant', 'canteen', 'food court',
                'book stall', 'magazine stall', 'vendor', 'hawker', 'shop',
                
                // Transportation
                'parking', 'vehicle parking', 'car parking', 'two wheeler parking',
                'auto stand', 'taxi stand', 'bus stand', 'local transport',
                'connectivity', 'last mile connectivity', 'feeder service',
                
                // Utilities and Services
                'toilet', 'washroom', 'restroom', 'lavatory', 'bathroom facility',
                'drinking water', 'water cooler', 'tap water', 'RO water',
                'ATM', 'bank', 'post office', 'telephone booth', 'STD booth',
                'internet facility', 'wifi', 'charging point', 'mobile charging',
                
                // Accessibility Features
                'escalator', 'elevator', 'lift', 'ramp', 'wheelchair access',
                'disabled facilities', 'senior citizen facilities', 'accessibility',
                'barrier free access', 'foot over bridge', 'subway', 'underpass',
                
                // Safety and Security
                'security', 'CCTV', 'surveillance', 'police post', 'RPF post',
                'help line', 'emergency contact', 'first aid', 'medical room',
                'fire safety', 'emergency exit', 'safety equipment',
                
                // Environmental Issues
                'lighting', 'ventilation', 'air circulation', 'cleanliness',
                'garbage disposal', 'waste management', 'pest control',
                'noise level', 'air quality', 'temperature control'
            ],
            departments: ['System Monitoring Team']
        },
        {
            name: 'Train Specifics',
            keywords: [
                // Train Identification
                'train number', 'train name', 'train code', 'service number',
                'rake number', 'consist number', 'formation', 'train composition',
                'train type', 'train category', 'train class', 'service type',
                
                // Coach Details
                'coach number', 'coach type', 'coach position', 'bogey', 'compartment',
                'carriage', 'wagon', 'rake', 'unit', 'set', 'formation details',
                'coach sequence', 'coach arrangement', 'coach orientation',
                
                // Locomotive Details
                'engine', 'locomotive', 'loco', 'pilot', 'power', 'traction',
                'electric loco', 'diesel loco', 'dual mode', 'WAP', 'WDM', 'WDP',
                'loco shed', 'home shed', 'link', 'crew', 'driver', 'assistant driver',
                
                // Technical Systems
                'speed', 'maximum speed', 'commercial speed', 'average speed',
                'brakes', 'brake system', 'vacuum brake', 'air brake', 'dynamic brake',
                'coupling', 'coupler', 'buffer', 'draft gear', 'connection',
                'bogies', 'wheels', 'axles', 'suspension', 'traction motor',
                
                // Signaling and Control
                'signals', 'signal system', 'block section', 'section', 'block',
                'signal indication', 'aspect', 'signal post', 'signal failure',
                'ATP', 'automatic train protection', 'TCAS', 'anti collision',
                'kavach', 'safety system', 'train control', 'speed control',
                
                // Track and Infrastructure
                'track', 'railway line', 'section', 'division', 'zone',
                'broad gauge', 'meter gauge', 'narrow gauge', 'gauge',
                'single line', 'double line', 'multiple line', 'quadruple line',
                'electrified', 'non electrified', 'diesel section', 'electric section',
                
                // Geographic Elements
                'junction', 'station', 'halt', 'crossing', 'yard', 'siding',
                'loop line', 'main line', 'branch line', 'chord line',
                'bridge', 'tunnel', 'cutting', 'embankment', 'level crossing',
                
                // Operational Elements
                'station code', 'junction code', 'route code', 'path',
                'block station', 'crossing station', 'passenger halt',
                'technical halt', 'crew changing', 'engine changing',
                'reversal', 'shunting', 'marshalling', 'yard operation',
                
                // Schedule and Timing
                'scheduled time', 'actual time', 'running time', 'halt time',
                'detention', 'section time', 'block time', 'path time',
                'terminal time', 'turn around time', 'layover time',
                
                // Performance Metrics
                'punctuality', 'reliability', 'availability', 'utilization',
                'efficiency', 'performance', 'speed restriction', 'caution order',
                'temporary speed restriction', 'permanent speed restriction'
            ],
            departments: ['Operations Analytics Team']
        },
        {
            name: 'Operational Issues',
            keywords: [
                // Capacity and Load Issues
                'operational', 'operations', 'capacity', 'load', 'passenger load',
                'overcrowding', 'overload', 'full capacity', 'beyond capacity',
                'standing passengers', 'no seats', 'packed train', 'congested',
                'heavy rush', 'peak hour', 'rush hour', 'passenger rush',
                
                // Traffic Management
                'traffic', 'traffic control', 'traffic regulation', 'traffic density',
                'congestion', 'traffic jam', 'bottleneck', 'choke point',
                'line capacity', 'section capacity', 'route capacity',
                'path allocation', 'slot allocation', 'priority', 'precedence',
                
                // Resource Management
                'resource shortage', 'crew shortage', 'staff shortage', 'manpower',
                'rolling stock shortage', 'rake shortage', 'locomotive shortage',
                'engine availability', 'crew availability', 'driver shortage',
                'guard shortage', 'TTE shortage', 'staff deployment',
                
                // Schedule Management
                'schedule', 'timetable', 'time table', 'working timetable',
                'schedule adherence', 'schedule deviation', 'schedule conflict',
                'path conflict', 'crossing conflict', 'meet arrangement',
                'overtaking', 'precedence', 'priority movement',
                
                // Reservation and Booking
                'reservation chart', 'chart preparation', 'passenger list',
                'occupancy', 'seat occupancy', 'berth occupancy', 'utilization',
                'booking pattern', 'demand pattern', 'passenger density',
                'load factor', 'seat factor', 'revenue per kilometer',
                
                // Coordination Issues
                'coordination', 'synchronization', 'integration', 'interface',
                'handover', 'takeover', 'crew change', 'shift change',
                'communication gap', 'information delay', 'update delay',
                'real time information', 'status update', 'progress report',
                
                // System Integration
                'system integration', 'data integration', 'information system',
                'control system', 'monitoring system', 'tracking system',
                'GPS tracking', 'real time tracking', 'train tracking',
                'automatic update', 'system sync', 'database update',
                
                // Performance Issues
                'performance', 'efficiency', 'productivity', 'utilization',
                'optimization', 'improvement', 'enhancement', 'upgrade',
                'modernization', 'automation', 'digitization', 'technology',
                
                // Passenger Flow
                'passenger flow', 'crowd management', 'queue management',
                'boarding pattern', 'alighting pattern', 'passenger movement',
                'platform crowding', 'coach distribution', 'load distribution',
                'passenger guidance', 'crowd control', 'rush management',
                
                // Emergency Operations
                'emergency operation', 'crisis management', 'contingency plan',
                'backup arrangement', 'alternative arrangement', 'emergency protocol',
                'disaster management', 'evacuation procedure', 'emergency response',
                'incident management', 'problem resolution', 'quick recovery'
            ],
            departments: ['High Density Route Support']
        },
        {
            name: 'Service Frequency',
            keywords: [
                // General Frequency Terms
                'frequency', 'service frequency', 'train frequency', 'headway',
                'interval', 'gap between trains', 'service interval', 'running interval',
                'schedule frequency', 'timetable frequency', 'operation frequency',
                
                // Schedule Types
                'schedule', 'timetable', 'time table', 'working timetable',
                'passenger timetable', 'public timetable', 'train schedule',
                'service schedule', 'running schedule', 'operation schedule',
                
                // Running Days
                'running days', 'operation days', 'service days', 'weekly pattern',
                'daily service', 'weekly service', 'bi-weekly', 'tri-weekly',
                'alternate days', 'odd days', 'even days', 'specific days',
                'monday to friday', 'weekdays', 'weekends', 'holidays',
                
                // Service Types
                'daily service', 'express service', 'passenger service', 'local service',
                'suburban service', 'intercity service', 'long distance service',
                'short distance service', 'regional service', 'zonal service',
                
                // Train Categories
                'special train', 'regular train', 'permanent train', 'temporary train',
                'seasonal train', 'festival special', 'holiday special', 'summer special',
                'winter special', 'exam special', 'mela special', 'fair special',
                
                // Speed Categories
                'express train', 'superfast train', 'mail train', 'passenger train',
                'local train', 'fast train', 'slow train', 'stopper',
                'non-stop', 'limited stop', 'all station', 'intercity',
                
                // Premium Services
                'rajdhani', 'shatabdi', 'duronto', 'vande bharat', 'tejas',
                'gatimaan', 'humsafar', 'antyodaya', 'deen dayalu', 'premium service',
                'luxury train', 'tourist train', 'palace on wheels', 'maharaja express',
                
                // Operational Patterns
                'circular service', 'shuttle service', 'return service', 'round trip',
                'one way', 'terminal to terminal', 'point to point', 'hub and spoke',
                'feeder service', 'connecting service', 'branch service',
                
                // Frequency Changes
                'increased frequency', 'reduced frequency', 'frequency enhancement',
                'frequency cut', 'service addition', 'service withdrawal',
                'new service', 'discontinued service', 'suspended service',
                'restored service', 'extended service', 'curtailed service',
                
                // Time Slots
                'morning service', 'afternoon service', 'evening service', 'night service',
                'peak hour', 'off peak', 'lean period', 'busy period',
                'rush hour frequency', 'normal frequency', 'reduced frequency',
                
                // Service Planning
                'demand based', 'load based', 'passenger demand', 'market demand',
                'route planning', 'service planning', 'capacity planning',
                'resource planning', 'crew planning', 'rolling stock planning',
                
                // Performance Metrics
                'service reliability', 'schedule adherence', 'punctuality',
                'on time performance', 'frequency compliance', 'service availability',
                'operational efficiency', 'passenger satisfaction', 'utilization factor'
            ],
            departments: ['Operations Analytics Team']
        },
        {
            name: 'Route Information',
            keywords: [
                // Basic Route Terms
                'route', 'railway route', 'train route', 'service route',
                'path', 'journey path', 'travel path', 'corridor',
                'line', 'railway line', 'track', 'section', 'stretch',
                
                // Station Information
                'stops', 'halts', 'stations', 'intermediate stations', 'stoppage',
                'pickup points', 'boarding points', 'alighting points',
                'scheduled stops', 'optional stops', 'conditional stops',
                'flag stations', 'crossing stations', 'junction stations',
                
                // Route Points
                'terminus', 'terminal', 'originating station', 'destination station',
                'origin', 'destination', 'source', 'end point', 'final stop',
                'starting point', 'beginning', 'commencement', 'conclusion',
                
                // Route Description
                'via', 'through', 'passing through', 'en route', 'on the way',
                'connecting', 'linking', 'joining', 'route description',
                'itinerary', 'journey details', 'travel details', 'route map',
                
                // Distance and Geography
                'distance', 'total distance', 'route distance', 'journey distance',
                'kilometer', 'km', 'mileage', 'span', 'coverage',
                'geographic coverage', 'regional coverage', 'state coverage',
                'interstate', 'intrastate', 'cross country', 'trans regional',
                
                // Journey Time
                'journey time', 'travel time', 'running time', 'total time',
                'duration', 'time taken', 'elapsed time', 'schedule time',
                'actual time', 'estimated time', 'approximate time',
                
                // Route Types
                'direct route', 'indirect route', 'shortest route', 'longest route',
                'alternate route', 'backup route', 'diversion route',
                'circular route', 'loop route', 'branch route', 'main route',
                
                // Network Connectivity
                'connectivity', 'connection', 'network', 'rail network',
                'inter connection', 'cross connection', 'branch connection',
                'feeder connection', 'last mile connectivity', 'regional connectivity',
                
                // Route Planning
                'route planning', 'route optimization', 'route efficiency',
                'route selection', 'route comparison', 'route analysis',
                'feasibility', 'viability', 'accessibility', 'reachability',
                
                // Traffic Patterns
                'traffic pattern', 'passenger flow', 'demand pattern',
                'seasonal pattern', 'daily pattern', 'weekly pattern',
                'peak direction', 'lean direction', 'balanced traffic',
                
                // Infrastructure Details
                'electrified route', 'non electrified route', 'diesel route',
                'broad gauge route', 'meter gauge route', 'narrow gauge route',
                'double line', 'single line', 'multiple line', 'quadruple line',
                
                // Operational Details
                'commercial speed', 'average speed', 'maximum speed',
                'speed restriction', 'gradient', 'curve', 'straight section',
                'ruling gradient', 'steepest gradient', 'sharpest curve',
                
                // Service Coverage
                'coverage area', 'service area', 'catchment area', 'command area',
                'regional coverage', 'district coverage', 'city coverage',
                'suburban coverage', 'rural coverage', 'urban coverage',
                
                // Route Status
                'operational route', 'under construction', 'proposed route',
                'sanctioned route', 'survey route', 'feasibility route',
                'new route', 'existing route', 'upgraded route', 'modernized route',
                
                // Junction and Connectivity
                'railway junction', 'major junction', 'important junction',
                'crossing point', 'meeting point', 'interchange',
                'hub station', 'nodal station', 'central station', 'main station'
            ],
            departments: ['System Monitoring Team']
        }
    ],
    priority: 'medium',
    confidence: 0.8
},
// ----------------------------

'Accessibility': {
    subcategories: [
        {
            name: 'Disability Services',
            keywords: [
                // General Disability Terms
                'wheelchair access', 'wheelchair', 'disabled facilities', 'handicapped',
                'differently abled', 'disability', 'physical disability', 'mobility',
                'accessibility', 'accessible', 'barrier free', 'ramp', 'lift', 'elevator',
                'special needs', 'assistance', 'help', 'support', 'aid', 'divyangjan',
                'person with disability', 'PwD', 'specially abled', 'challenged',
                
                // Legal and Policy Terms
                'disability certificate', 'disability ID', 'disability card', 'UDID card',
                'disability concession', 'disability quota', 'disability reservation',
                'RPWD Act', 'Rights of Persons with Disabilities Act', 'accessibility compliance',
                'universal design', 'inclusive design', 'barrier free access',
                
                // Mobility Equipment
                'wheelchair accessible', 'wheelchair ramp', 'wheelchair lift', 'wheelchair space',
                'electric wheelchair', 'manual wheelchair', 'mobility scooter', 'walker',
                'rollator', 'mobility device', 'assistive device', 'mobility equipment',
                
                // Infrastructure Accessibility
                'accessible entrance', 'accessible exit', 'accessible platform', 'accessible toilet',
                'accessible parking', 'disabled parking', 'ramp access', 'slope access',
                'gentle slope', 'handrail', 'grab bar', 'support rail', 'non-slip surface',
                'level boarding', 'platform gap', 'boarding assistance', 'alighting assistance',
                
                // Station Facilities
                'disabled counter', 'accessibility counter', 'low height counter', 'dual height counter',
                'accessible ticket counter', 'accessible information desk', 'help desk for disabled',
                'disability help desk', 'assistance booth', 'support center',
                
                // Staff Assistance
                'porter assistance', 'station assistance', 'boarding assistance', 'wheelchair assistance',
                'personal assistance', 'attendant help', 'escort service', 'guidance service',
                'mobility assistance', 'travel assistance', 'disability support staff',
                
                // Accommodation Services
                'reserved quota', 'disability quota', 'lower berth quota', 'accessible coach',
                'priority booking', 'special accommodation', 'extra space', 'companion berth',
                'attendant accommodation', 'caregiver space', 'medical equipment space'
            ],
            departments: ['Accessibility Support Team']
        },
        {
            name: 'Visual Impairment',
            keywords: [
                // Vision Conditions
                'blind', 'visually impaired', 'vision impairment', 'sight loss', 'vision loss',
                'low vision', 'partially sighted', 'partially blind', 'eye sight', 'vision problem',
                'visual disability', 'blind person', 'sightless', 'unsighted', 'vision challenged',
                
                // Medical Terms
                'blindness', 'visual acuity', 'night blindness', 'color blindness', 'tunnel vision',
                'macular degeneration', 'glaucoma', 'cataract', 'diabetic retinopathy',
                'retinal detachment', 'corneal opacity', 'optic nerve damage',
                
                // Assistive Technology
                'braille', 'braille signage', 'braille script', 'braille display', 'braille buttons',
                'screen reader', 'voice over', 'audio description', 'talking software',
                'speech output', 'voice guidance', 'audio announcement', 'sound navigation',
                'talking clock', 'audio book', 'voice recorder', 'speech synthesis',
                
                // Mobility Aids
                'guide dog', 'seeing eye dog', 'guide animal', 'white cane', 'mobility cane',
                'long cane', 'folding cane', 'GPS navigation', 'audio GPS', 'voice navigation',
                'orientation mobility', 'spatial orientation', 'navigation assistance',
                
                // Digital Accessibility
                'screen magnifier', 'magnification software', 'zoom software', 'large print',
                'high contrast', 'contrast enhancement', 'text to speech', 'voice output',
                'accessibility mode', 'reading software', 'OCR software', 'scanning software',
                
                // Railway Specific
                'tactile paving', 'tactile pathway', 'tactile guidance', 'tactile strip',
                'warning strip', 'platform edge', 'audio announcement', 'voice guidance',
                'talking tickets', 'audio information', 'verbal communication', 'sound signals',
                
                // Communication
                'verbal description', 'audio description', 'spoken information', 'voice communication',
                'sound cue', 'audio cue', 'beep signal', 'chime signal', 'announcement system',
                'public address', 'PA system', 'speaker announcement', 'audio alert',
                
                // Safety Concerns
                'platform safety', 'gap warning', 'step warning', 'obstacle warning',
                'hazard warning', 'safety announcement', 'emergency audio', 'audio evacuation',
                'sound alarm', 'audible signal', 'warning tone', 'safety sound'
            ],
            departments: ['Accessibility Digital Team']
        },
        {
            name: 'Hearing Impairment',
            keywords: [
                // Hearing Conditions
                'deaf', 'hearing impaired', 'hearing loss', 'hard of hearing', 'hearing difficulty',
                'hearing disability', 'hearing challenged', 'deaf person', 'hearing problem',
                'deaf mute', 'speech impaired', 'communication disorder', 'auditory impairment',
                
                // Medical Terms
                'deafness', 'sensorineural hearing loss', 'conductive hearing loss', 'mixed hearing loss',
                'profound hearing loss', 'severe hearing loss', 'mild hearing loss', 'moderate hearing loss',
                'sudden hearing loss', 'noise induced hearing loss', 'NIHL', 'tinnitus',
                
                // Assistive Devices
                'hearing aid', 'digital hearing aid', 'cochlear implant', 'bone anchored hearing aid',
                'BAHA', 'assistive listening device', 'FM system', 'loop system', 'infrared system',
                'personal amplifier', 'pocket talker', 'sound amplifier', 'hearing amplifier',
                
                // Communication Methods
                'sign language', 'Indian sign language', 'ISL', 'ASL', 'finger spelling',
                'lip reading', 'speech reading', 'visual communication', 'gesture communication',
                'written communication', 'text communication', 'typed communication',
                
                // Technology Support
                'text to speech', 'speech to text', 'caption service', 'subtitles', 'closed captioning',
                'visual alert', 'flashing light', 'vibrating alert', 'tactile alert',
                'SMS alert', 'text message', 'mobile notification', 'app notification',
                
                // Railway Specific
                'visual announcement', 'display board', 'LED display', 'text display',
                'information board', 'visual information', 'written instruction', 'sign board',
                'visual signal', 'light signal', 'indicator light', 'warning light',
                
                // Interpreter Services
                'sign language interpreter', 'interpreter service', 'communication assistant',
                'deaf interpreter', 'signing service', 'translation service', 'interpretation help',
                
                // Workplace Issues
                'railway noise', 'noise exposure', 'occupational hearing loss', 'noise pollution',
                'hearing protection', 'ear protection', 'noise control', 'sound level',
                'decibel level', 'hearing conservation', 'audiometry', 'hearing test'
            ],
            departments: ['Accessibility Support Team']
        },
        {
            name: 'Mobility Issues',
            keywords: [
                // Walking Difficulties
                'walking difficulty', 'mobility problem', 'movement difficulty', 'locomotor disability',
                'walking impairment', 'gait problem', 'balance issue', 'stability problem',
                'coordination problem', 'motor dysfunction', 'movement disorder',
                
                // Mobility Aids
                'crutches', 'walking stick', 'walking cane', 'quad cane', 'forearm crutches',
                'underarm crutches', 'walker', 'rollator', 'zimmer frame', 'walking frame',
                'mobility aid', 'walking aid', 'support device', 'ambulatory aid',
                
                // Limb Conditions
                'prosthetic', 'artificial limb', 'prosthetic leg', 'prosthetic arm', 'prosthesis',
                'amputee', 'amputation', 'leg amputation', 'arm amputation', 'missing limb',
                'limb deficiency', 'congenital limb deficiency', 'acquired amputation',
                
                // Paralysis Conditions
                'paralysis', 'paralyzed', 'paraplegic', 'quadriplegic', 'hemiplegic',
                'spinal cord injury', 'spinal injury', 'spine injury', 'SCI', 'paraplegia',
                'quadriplegia', 'hemiplegia', 'partial paralysis', 'complete paralysis',
                
                // Wheelchair Related
                'wheelchair bound', 'wheelchair user', 'wheelchair dependent', 'manual wheelchair',
                'electric wheelchair', 'power wheelchair', 'motorized wheelchair', 'sports wheelchair',
                'lightweight wheelchair', 'heavy duty wheelchair', 'folding wheelchair',
                
                // Medical Conditions
                'cerebral palsy', 'muscular dystrophy', 'multiple sclerosis', 'MS', 'arthritis',
                'joint pain', 'bone disorder', 'muscle weakness', 'muscle atrophy',
                'neurological disorder', 'orthopedic condition', 'skeletal disorder',
                
                // Mobility Challenges
                'bedridden', 'bed bound', 'immobile', 'limited mobility', 'reduced mobility',
                'restricted movement', 'mobility restriction', 'movement limitation',
                'physical limitation', 'functional limitation', 'activity limitation',
                
                // Transport Needs
                'transfer assistance', 'lifting assistance', 'carry assistance', 'transport wheelchair',
                'stretcher', 'medical trolley', 'patient trolley', 'mobility equipment transport',
                'equipment storage', 'device accommodation', 'special transport'
            ],
            departments: ['Accessibility Support Team']
        },
        {
            name: 'Elderly/Senior Citizens',
            keywords: [
                // Age Terms
                'senior citizen', 'elderly', 'old age', 'senior', 'aged', 'geriatric',
                'old person', 'elderly person', 'aging', 'age related', 'elder',
                'senior passenger', 'elderly traveler', 'mature adult', 'golden ager',
                
                // Age Categories
                '60 years', '58 years', 'above 60', 'above 58', 'retirement age',
                'pension age', 'senior age', 'elderly age', 'old age pensioner',
                'super senior citizen', 'very senior citizen', 'elderly citizen',
                
                // Documentation
                'age proof', 'age certificate', 'date of birth proof', 'birth certificate',
                'senior citizen card', 'pension card', 'retirement certificate',
                'voter ID', 'aadhar card', 'driving license', 'passport',
                
                // Concessions and Benefits
                'senior citizen concession', 'elderly concession', 'age concession',
                'senior citizen discount', 'pension concession', 'retirement benefit',
                '40% concession', '50% concession', 'male senior citizen', 'female senior citizen',
                'lady senior citizen', 'senior citizen quota', 'elderly quota',
                
                // Health Related
                'age related illness', 'chronic condition', 'medication', 'medical care',
                'health issue', 'frail health', 'weak health', 'medical condition',
                'health problem', 'age related disability', 'geriatric care',
                
                // Services and Facilities
                'lower berth preference', 'ground floor preference', 'elevator access',
                'ramp access', 'priority seating', 'reserved seating', 'senior citizen coach',
                'elderly assistance', 'porter service', 'wheelchair service', 'medical assistance',
                
                // Safety Concerns
                'fall risk', 'mobility issue', 'balance problem', 'vision problem',
                'hearing problem', 'confusion', 'memory issue', 'orientation problem',
                'safety concern', 'emergency assistance', 'medical emergency',
                
                // Travel Patterns
                'pilgrim', 'religious travel', 'family visit', 'medical visit',
                'hospital visit', 'routine travel', 'regular passenger', 'frequent traveler',
                'seasonal travel', 'festival travel', 'social visit', 'leisure travel'
            ],
            departments: ['Senior Citizen Support Team']
        },
        {
            name: 'Pregnant Women',
            keywords: [
                // Pregnancy Terms
                'pregnant', 'pregnancy', 'expecting', 'expectant mother', 'expecting mother',
                'pregnant lady', 'pregnant woman', 'maternity', 'prenatal', 'antenatal',
                'gestating', 'with child', 'gravid', 'maternal', 'motherhood',
                
                // Pregnancy Stages
                'first trimester', 'second trimester', 'third trimester', 'early pregnancy',
                'late pregnancy', 'full term', 'near delivery', 'due date', 'labor',
                'delivery', 'childbirth', 'birth', 'postpartum', 'post delivery',
                
                // Medical Conditions
                'high risk pregnancy', 'pregnancy complications', 'gestational diabetes',
                'pregnancy hypertension', 'morning sickness', 'nausea', 'vomiting',
                'pregnancy discomfort', 'back pain', 'swelling', 'fatigue',
                'pregnancy related illness', 'obstetric emergency', 'medical emergency',
                
                // Accommodation Needs
                'lower berth', 'ground level', 'easy access', 'close to toilet',
                'near washroom', 'comfortable seating', 'extra space', 'leg space',
                'support pillow', 'comfortable position', 'reclining seat',
                
                // Travel Concerns
                'travel safety', 'pregnancy travel', 'safe travel', 'medical clearance',
                'doctor permission', 'travel restriction', 'travel limitation',
                'emergency contact', 'medical support', 'healthcare access',
                
                // Ladies Coach
                'ladies compartment', 'ladies coach', 'women only coach', 'female compartment',
                'women reserved', 'ladies reservation', 'women safety', 'gender segregation',
                'ladies only', 'women exclusive', 'female only section',
                
                // Support Services
                'maternity support', 'pregnancy assistance', 'medical assistance',
                'emergency help', 'healthcare support', 'nursing assistance',
                'midwife assistance', 'medical care', 'obstetric care',
                
                // Family Travel
                'family accommodation', 'spouse accommodation', 'husband travel',
                'family support', 'companion travel', 'attendant', 'caregiver',
                'support person', 'family member', 'relative assistance'
            ],
            departments: ['Accessibility Support Team']
        },
        {
            name: 'Children',
            keywords: [
                // Age Categories
                'child', 'minor', 'infant', 'baby', 'toddler', 'kid', 'children',
                'young child', 'small child', 'little child', 'school child',
                'teenage', 'adolescent', 'juvenile', 'underage', 'below 18',
                
                // Age Specific
                'newborn', 'under 5', 'under 12', 'under 18', 'child passenger',
                'child traveler', 'young passenger', 'minor passenger', 'student',
                'school going', 'pre-school', 'kindergarten', 'primary school',
                
                // Unaccompanied Travel
                'unaccompanied minor', 'child traveling alone', 'solo child travel',
                'independent child', 'child without adult', 'child without parent',
                'child without guardian', 'single child', 'alone child',
                
                // Family Travel
                'family travel', 'child with family', 'parent and child', 'family group',
                'child care', 'parental supervision', 'guardian care', 'family accommodation',
                'family berth', 'family coach', 'family compartment',
                
                // Child Services
                'child assistance', 'child help', 'child support', 'child care service',
                'child supervision', 'child monitoring', 'child safety', 'child protection',
                'child welfare', 'child guidance', 'child escort', 'child attendant',
                
                // Safety and Security
                'child safety', 'child security', 'child protection', 'child welfare',
                'missing child', 'lost child', 'child emergency', 'child rescue',
                'child help', 'child assistance', 'vulnerable child', 'child at risk',
                
                // Medical Needs
                'pediatric', 'child health', 'child medical', 'child medicine',
                'child treatment', 'child care', 'child nursing', 'child emergency',
                'sick child', 'ill child', 'child patient', 'medical child',
                
                // Special Needs
                'special needs child', 'disabled child', 'challenged child',
                'child with disability', 'special child', 'differently abled child',
                'autistic child', 'ADHD child', 'learning disability', 'developmental delay',
                
                // Facilities
                'child friendly', 'kid friendly', 'family friendly', 'child amenities',
                'child facilities', 'play area', 'child entertainment', 'child comfort',
                'baby changing', 'nursing room', 'feeding area', 'child toilet'
            ],
            departments: ['Accessibility Support Team']
        },
        {
            name: 'Medical Conditions',
            keywords: [
                // General Medical Terms
                'medical condition', 'health condition', 'health issue', 'illness',
                'disease', 'disorder', 'syndrome', 'patient', 'medical problem',
                'health problem', 'chronic condition', 'acute condition', 'medical case',
                
                // Chronic Diseases
                'chronic illness', 'long term illness', 'persistent condition', 'ongoing illness',
                'diabetes', 'diabetic', 'blood sugar', 'insulin', 'glucose',
                'hypertension', 'high blood pressure', 'low blood pressure', 'BP',
                'heart condition', 'cardiac', 'heart disease', 'heart patient',
                
                // Respiratory Conditions
                'asthma', 'breathing problem', 'respiratory issue', 'lung condition',
                'COPD', 'bronchitis', 'pneumonia', 'breathing difficulty', 'oxygen',
                'inhaler', 'nebulizer', 'respiratory support', 'breathing aid',
                
                // Medical Equipment
                'medical equipment', 'medical device', 'life support', 'ventilator',
                'oxygen cylinder', 'oxygen concentrator', 'BIPAP', 'CPAP',
                'dialysis machine', 'glucose monitor', 'blood pressure monitor',
                'medical pump', 'infusion pump', 'feeding tube', 'catheter',
                
                // Medications
                'medication', 'medicine', 'prescription', 'drug', 'tablet',
                'injection', 'syringe', 'insulin pen', 'medical supply',
                'pharmacy', 'chemist', 'medical store', 'first aid kit',
                
                // Emergency Conditions
                'medical emergency', 'health emergency', 'critical condition',
                'emergency medication', 'emergency treatment', 'urgent medical care',
                'immediate medical attention', 'emergency intervention', 'medical crisis',
                
                // Kidney and Liver
                'kidney disease', 'renal failure', 'dialysis', 'kidney patient',
                'liver disease', 'hepatitis', 'liver cirrhosis', 'organ failure',
                'transplant patient', 'post transplant', 'immunosuppressed',
                
                // Cancer and Oncology
                'cancer', 'tumor', 'oncology', 'chemotherapy', 'radiation therapy',
                'cancer patient', 'cancer treatment', 'immunocompromised',
                'post surgery', 'surgical patient', 'recovery patient',
                
                // Mental Health
                'mental health', 'psychiatric condition', 'depression', 'anxiety',
                'bipolar', 'schizophrenia', 'mental illness', 'psychological condition',
                'psychiatric medication', 'mental disorder', 'emotional disorder',
                
                // Neurological
                'neurological condition', 'epilepsy', 'seizure', 'stroke', 'paralysis',
                'Parkinson disease', 'Alzheimer disease', 'dementia', 'brain injury',
                'spinal cord injury', 'nerve disorder', 'muscle disorder',
                
                // Travel Medical Needs
                'medical travel', 'medical transport', 'patient transport',
                'medical accommodation', 'hospital visit', 'doctor visit',
                'medical appointment', 'treatment travel', 'therapy travel'
            ],
            departments: ['Accessibility Support Team']
        },
        {
            name: 'Accessibility Features',
            keywords: [
                // Infrastructure Features
                'accessible toilet', 'disabled toilet', 'accessible washroom', 'barrier free toilet',
                'accessible coach', 'disabled coach', 'wheelchair accessible train',
                'accessible platform', 'accessible station', 'barrier free station',
                'accessible entrance', 'accessible exit', 'accessible pathway',
                
                // Seating Arrangements
                'priority seating', 'reserved seating', 'special seating', 'priority berth',
                'reserved berth', 'lower berth', 'ground level', 'accessible seat',
                'wheelchair space', 'mobility device space', 'equipment space',
                'extra space', 'additional space', 'special accommodation',
                
                // Assistive Services
                'attendant', 'caregiver', 'companion', 'escort', 'helper',
                'personal assistant', 'care assistant', 'support person', 'aide',
                'nursing attendant', 'medical attendant', 'therapy assistant',
                
                // Booking and Reservations
                'disability quota', 'accessibility quota', 'special quota', 'reserved quota',
                'priority booking', 'advance booking', 'special booking', 'accommodation booking',
                'accessible booking', 'disability reservation', 'special reservation',
                
                // Support Equipment
                'assistive technology', 'adaptive equipment', 'mobility equipment',
                'communication device', 'support device', 'aid device',
                'therapeutic equipment', 'rehabilitation equipment', 'medical device',
                
                // Station Services
                'accessibility counter', 'disability help desk', 'special assistance counter',
                'accessibility information', 'disability services', 'support services',
                'assistance services', 'accommodation services', 'special services',
                
                // Design Features
                'universal design', 'inclusive design', 'accessible design', 'barrier free design',
                'user friendly', 'easy access', 'convenient access', 'simple access',
                'intuitive design', 'accessible interface', 'accessible navigation',
                
                // Standards and Compliance
                'accessibility standard', 'disability compliance', 'accessibility guideline',
                'universal accessibility', 'accessibility audit', 'compliance check',
                'accessibility assessment', 'barrier audit', 'accessibility evaluation',
                
                // Technology Features
                'voice guidance', 'audio assistance', 'visual assistance', 'tactile assistance',
                'accessible technology', 'assistive software', 'accessibility app',
                'accessible interface', 'voice control', 'gesture control',
                
                // Emergency Features
                'emergency assistance', 'accessibility emergency', 'emergency evacuation',
                'emergency communication', 'emergency access', 'emergency support',
                'crisis assistance', 'urgent assistance', 'immediate help'
            ],
            departments: ['Accessibility Support Team']
        }
    ],
    priority: 'high',
    confidence: 0.9
},

// ----------------------------


'Station Amenities': {
    subcategories: [
        {
            name: 'Basic Amenities',
            keywords: [
                // General Amenities
                'station amenities', 'station facilities', 'station services', 'station infrastructure',
                'amenities', 'facilities', 'services', 'infrastructure', 'basic amenities',
                'passenger amenities', 'passenger facilities', 'minimum essential amenities',
                'station development', 'station upgrade', 'station modernization',
                
                // Waiting Areas
                'waiting room', 'waiting hall', 'waiting area', 'passenger waiting room',
                'ladies waiting room', 'general waiting room', 'upper class waiting room',
                '2nd class waiting room', 'AC waiting room', 'non AC waiting room',
                'waiting room not available', 'waiting room closed', 'waiting room dirty',
                'waiting room overcrowded', 'waiting room small', 'waiting room facilities',
                
                // Seating Arrangements
                'seating', 'benches', 'chairs', 'sitting arrangement', 'seats',
                'passenger seating', 'platform seating', 'waiting room seating',
                'no seating', 'insufficient seating', 'broken seats', 'uncomfortable seats',
                'seating capacity', 'bench repair', 'chair repair', 'seating space',
                
                // Accommodation Facilities
                'retiring room', 'rest room', 'dormitory', 'lodge', 'accommodation',
                'railway accommodation', 'passenger accommodation', 'overnight stay',
                'room booking', 'room reservation', 'room not available', 'room dirty',
                'room maintenance', 'room facilities', 'bed facilities', 'AC room',
                'non AC room', 'family room', 'single room', 'double room',
                
                // Storage Facilities
                'cloak room', 'luggage room', 'baggage', 'storage', 'locker',
                'left luggage', 'baggage storage', 'luggage facility', 'parcel office',
                'luggage counter', 'baggage claim', 'storage facility', 'luggage safety',
                'locker facility', 'baggage handling', 'luggage assistance',
                
                // Station Categories
                'A1 station', 'A category station', 'B category station', 'C category station',
                'D category station', 'E category station', 'halt station', 'junction station',
                'terminal station', 'major station', 'important station', 'suburban station',
                
                // Infrastructure Issues
                'station building', 'station complex', 'station structure', 'station layout',
                'platform facilities', 'concourse area', 'circulating area', 'station premises',
                'station area', 'station surroundings', 'station environment'
            ],
            departments: ['NR Station Management', 'SR Station Management']
        },
        {
            name: 'Food and Beverage',
            keywords: [
                // Food Outlets
                'food stall', 'food court', 'restaurant', 'canteen', 'cafeteria',
                'refreshment room', 'dining hall', 'food plaza', 'food counter',
                'catering stall', 'modular catering stall', 'food vendor', 'food service',
                'food facility', 'eating place', 'food outlet', 'food kiosk',
                
                // Beverage Services
                'tea stall', 'coffee shop', 'chai stall', 'coffee counter', 'juice counter',
                'beverage stall', 'soft drink', 'cold drink', 'hot beverage',
                'tea vendor', 'coffee vendor', 'milk booth', 'lassi counter',
                
                // Vendors and Staff
                'vendor', 'hawker', 'food seller', 'tea seller', 'snack vendor',
                'food hawker', 'mobile vendor', 'station vendor', 'authorized vendor',
                'unauthorized vendor', 'vendor license', 'vendor behavior',
                
                // Food Types
                'snack bar', 'fast food', 'meals', 'breakfast', 'lunch', 'dinner',
                'snacks', 'sweets', 'biscuits', 'chips', 'namkeen', 'fruits',
                'packaged food', 'fresh food', 'hot food', 'cold food',
                
                // Water Facilities
                'water', 'drinking water', 'water cooler', 'RO water', 'mineral water',
                'water fountain', 'tap water', 'water bottle', 'hydration', 'potable water',
                'filtered water', 'clean water', 'safe water', 'water quality',
                'water ATM', 'water vending machine', 'water dispenser', 'water facility',
                'water shortage', 'no water', 'water problem', 'water supply',
                
                // Service Issues
                'food quality', 'food price', 'overpriced food', 'expensive food',
                'cheap food', 'food hygiene', 'food safety', 'stale food',
                'expired food', 'contaminated food', 'food poisoning', 'unhygienic food',
                'food service', 'food timing', 'food availability', 'food shortage',
                
                // Commercial Aspects
                'food license', 'food permit', 'food standards', 'food inspection',
                'food quality control', 'FSSAI', 'food safety standards',
                'catering contract', 'food rates', 'price control'
            ],
            departments: ['Commercial Station Section']
        },
        {
            name: 'Commercial Services',
            keywords: [
                // Reading Materials
                'book stall', 'magazine', 'newspaper', 'book shop', 'news stand',
                'stationery', 'stationery shop', 'pen', 'paper', 'notebook',
                'magazine stall', 'newspaper vendor', 'reading material',
                
                // Retail Services
                'gift shop', 'souvenir shop', 'retail outlet', 'general store',
                'convenience store', 'kiosk', 'shop', 'store', 'retail space',
                'commercial space', 'shopping facility', 'market', 'bazaar',
                
                // Healthcare Services
                'pharmacy', 'medical store', 'chemist', 'medicine shop',
                'first aid', 'medical facility', 'health center', 'dispensary',
                'medical room', 'medical assistance', 'emergency medical',
                
                // Financial Services
                'ATM', 'cash machine', 'automated teller machine', 'bank',
                'banking facility', 'money exchange', 'currency exchange',
                'payment facility', 'cash withdrawal', 'bank branch',
                'financial services', 'money transfer', 'remittance',
                
                // Communication Services
                'internet cafe', 'cyber cafe', 'STD booth', 'phone booth',
                'public phone', 'telephone facility', 'communication facility',
                'internet facility', 'wifi', 'free wifi', 'broadband',
                'mobile network', 'signal strength', 'connectivity',
                
                // Charging Services
                'charging station', 'mobile charging', 'phone charging', 'laptop charging',
                'charging point', 'power outlet', 'charging facility', 'USB charging',
                'universal charging', 'charging port', 'power socket', 'electrical outlet',
                
                // Technology Services
                'automatic vending machine', 'AVM', 'vending machine', 'ticket vending machine',
                'automatic ticket vending', 'self service', 'digital services',
                'touch screen', 'kiosk machine', 'electronic services',
                
                // Other Services
                'post office', 'postal service', 'courier service', 'parcel service',
                'luggage weighing', 'weighing machine', 'photocopying', 'printing service',
                'lamination', 'binding service', 'photo studio', 'passport photo'
            ],
            departments: ['Commercial Station Section']
        },
        {
            name: 'Transportation',
            keywords: [
                // Local Transport
                'taxi', 'auto rickshaw', 'rickshaw', 'auto', 'three wheeler',
                'bus', 'local bus', 'city bus', 'metro', 'local train',
                'suburban train', 'feeder bus', 'shuttle service', 'public transport',
                'last mile connectivity', 'connectivity', 'transport facility',
                
                // Taxi Services
                'prepaid taxi', 'cab', 'taxi service', 'cab service', 'radio taxi',
                'taxi counter', 'taxi booking', 'taxi fare', 'taxi availability',
                'taxi queue', 'taxi stand', 'cab stand', 'taxi driver',
                
                // App-based Services
                'uber', 'ola', 'app taxi', 'online taxi', 'cab aggregator',
                'ride sharing', 'ride hailing', 'app based transport',
                'mobile taxi booking', 'digital taxi', 'smart taxi',
                
                // Parking Facilities
                'parking', 'vehicle parking', 'car parking', 'two wheeler parking',
                'bike parking', 'motorcycle parking', 'cycle parking', 'bicycle stand',
                'parking space', 'parking area', 'parking lot', 'multi level parking',
                'paid parking', 'free parking', 'parking charges', 'parking fee',
                'parking security', 'parking attendant', 'valet parking',
                
                // Transport Issues
                'transport', 'transportation', 'commute', 'travel', 'journey',
                'no transport', 'transport shortage', 'transport availability',
                'transport timing', 'transport frequency', 'transport fare',
                'overcharging', 'fare dispute', 'transport strike', 'bandh',
                
                // Accessibility
                'accessible transport', 'disabled transport', 'wheelchair accessible',
                'barrier free transport', 'senior citizen transport', 'special transport',
                
                // Infrastructure
                'transport hub', 'interchange', 'bus stand', 'bus stop', 'metro station',
                'transport terminal', 'integration', 'multimodal transport',
                'seamless connectivity', 'integrated transport'
            ],
            departments: ['NR Station Management', 'SR Station Management']
        },
        {
            name: 'Information Services',
            keywords: [
                // Inquiry Services
                'inquiry counter', 'enquiry counter', 'information desk', 'help desk',
                'assistance counter', 'query counter', 'customer service counter',
                'passenger assistance', 'information center', 'help center',
                'service counter', 'support desk', 'guidance center',
                
                // Navigation and Directions
                'station map', 'direction', 'directions', 'way finding', 'navigation',
                'route guidance', 'platform direction', 'exit direction', 'entrance direction',
                'coach position', 'coach guidance', 'train formation', 'coach indicator',
                
                // Signage
                'signage', 'sign board', 'board', 'display', 'indicator',
                'name board', 'direction board', 'platform board', 'coach position board',
                'train information board', 'departure board', 'arrival board',
                'digital display', 'LED display', 'electronic display', 'LCD display',
                
                // Audio Systems
                'announcement', 'PA system', 'public address system', 'speaker',
                'audio system', 'sound system', 'voice announcement', 'audio announcement',
                'train announcement', 'platform announcement', 'station announcement',
                'multilingual announcement', 'hindi announcement', 'english announcement',
                'regional language announcement', 'clear announcement', 'audible announcement',
                
                // Information Content
                'information', 'train information', 'schedule information', 'timing information',
                'platform information', 'delay information', 'cancellation information',
                'diversion information', 'real time information', 'updated information',
                'accurate information', 'current information', 'latest information',
                
                // Technology Systems
                'NTES', 'national train enquiry system', 'computer based announcement',
                'automated announcement', 'digital information', 'electronic information',
                'information kiosk', 'touch screen enquiry', 'interactive display',
                'QR code', 'mobile information', 'app based information',
                
                // Train Indicators
                'train indicator board', 'electronic train indicator', 'arrival indicator',
                'departure indicator', 'platform indicator', 'coach indicator board',
                'train running status', 'live train status', 'train tracking',
                
                // Time Display
                'clock', 'station clock', 'platform clock', 'time display',
                'digital clock', 'railway time', 'synchronized time', 'accurate time',
                
                // Information Quality
                'information accuracy', 'timely information', 'delayed information',
                'wrong information', 'incomplete information', 'confusing information',
                'misleading information', 'outdated information', 'information update'
            ],
            departments: ['NR Station Management', 'SR Station Management']
        },
        {
            name: 'Cleanliness',
            keywords: [
                // General Cleanliness
                'cleaning', 'cleanliness', 'station cleanliness', 'platform cleanliness',
                'housekeeping', 'sanitation', 'hygiene', 'station hygiene',
                'clean station', 'dirty station', 'unclean station', 'filthy station',
                'messy station', 'well maintained station', 'poorly maintained station',
                
                // Waste Management
                'dustbin', 'garbage bin', 'trash bin', 'waste bin', 'litter bin',
                'waste disposal', 'garbage disposal', 'waste management', 'trash collection',
                'garbage collection', 'waste segregation', 'recycling', 'composting',
                'waste overflow', 'overflowing dustbin', 'full garbage bin',
                
                // Cleaning Equipment
                'broom', 'mop', 'cleaning supplies', 'detergent', 'disinfectant',
                'cleaning equipment', 'vacuum cleaner', 'pressure washer',
                'cleaning chemicals', 'sanitizer', 'cleaning tools',
                
                // Toilet Facilities
                'toilet', 'washroom', 'bathroom', 'restroom', 'lavatory',
                'pay and use toilet', 'free toilet', 'public toilet', 'clean toilet',
                'dirty toilet', 'smelly toilet', 'toilet hygiene', 'toilet maintenance',
                'toilet cleaning', 'toilet paper', 'soap', 'hand wash',
                'sanitizer dispenser', 'towel', 'tissue paper', 'toilet flush',
                
                // Cleaning Staff
                'cleaning staff', 'housekeeping staff', 'sweeper', 'cleaner',
                'sanitation worker', 'maintenance staff', 'cleaning contractor',
                'cleaning agency', 'outsourced cleaning', 'cleaning supervisor',
                
                // Cleaning Issues
                'not cleaned', 'dirty', 'unclean', 'filthy', 'unhygienic',
                'poor cleaning', 'inadequate cleaning', 'irregular cleaning',
                'delayed cleaning', 'no cleaning', 'cleaning frequency',
                'cleaning schedule', 'cleaning standards', 'cleaning quality',
                
                // Specific Areas
                'platform cleaning', 'waiting room cleaning', 'toilet cleaning',
                'foot over bridge cleaning', 'subway cleaning', 'concourse cleaning',
                'parking area cleaning', 'approach road cleaning', 'circulating area cleaning',
                
                // Maintenance
                'maintenance', 'upkeep', 'repair', 'renovation', 'refurbishment',
                'infrastructure maintenance', 'facility maintenance', 'preventive maintenance',
                'corrective maintenance', 'regular maintenance', 'periodic maintenance',
                
                // Environmental
                'environment', 'ambient conditions', 'air quality', 'ventilation',
                'odor control', 'smell', 'stench', 'fragrance', 'freshness',
                'pest control', 'rodent control', 'insect control', 'fumigation'
            ],
            departments: ['NR Station Management', 'SR Station Management']
        },
        {
            name: 'Safety and Security',
            keywords: [
                // Security Forces
                'security', 'station security', 'railway security', 'police',
                'RPF', 'railway protection force', 'CISF', 'central industrial security force',
                'GRP', 'government railway police', 'security personnel', 'security officer',
                'guard', 'watchman', 'security guard', 'station guard',
                
                // Surveillance
                'CCTV', 'surveillance', 'camera', 'security camera', 'monitoring',
                'video surveillance', 'surveillance system', 'security monitoring',
                'CCTV coverage', 'camera installation', 'surveillance network',
                
                // Safety Measures
                'safety', 'passenger safety', 'station safety', 'platform safety',
                'safety measures', 'safety equipment', 'safety protocol',
                'safety guidelines', 'safety instructions', 'safety awareness',
                'safety training', 'safety drill', 'safety inspection',
                
                // Emergency Services
                'emergency', 'emergency services', 'emergency response', 'crisis management',
                'disaster management', 'emergency preparedness', 'emergency contact',
                'emergency helpline', 'emergency number', 'distress call',
                'emergency situation', 'emergency evacuation', 'emergency exit',
                
                // Medical Emergency
                'first aid', 'medical emergency', 'health emergency', 'ambulance',
                'medical room', 'dispensary', 'health center', 'medical facility',
                'medical assistance', 'emergency medical care', 'paramedic',
                'stretcher', 'medical equipment', 'oxygen', 'emergency medicine',
                
                // Fire Safety
                'fire safety', 'fire extinguisher', 'fire alarm', 'fire drill',
                'fire emergency', 'fire brigade', 'fire department', 'smoke detector',
                'fire exit', 'fire fighting equipment', 'fire prevention',
                
                // Crime Prevention
                'crime prevention', 'theft prevention', 'anti theft', 'security check',
                'baggage check', 'security screening', 'metal detector', 'X-ray machine',
                'security clearance', 'access control', 'restricted area',
                
                // Patrol and Rounds
                'patrol', 'security patrol', 'beat patrol', 'night patrol',
                'security rounds', 'patrolling', 'security presence', 'visible security',
                'security deployment', 'security arrangement', 'security cover',
                
                // Emergency Equipment
                'emergency equipment', 'safety equipment', 'rescue equipment',
                'life saving equipment', 'emergency lighting', 'backup power',
                'emergency generator', 'emergency communication', 'walkie talkie',
                
                // Incident Management
                'incident', 'accident', 'mishap', 'incident report', 'investigation',
                'inquiry', 'case registration', 'complaint registration', 'FIR',
                'police complaint', 'security incident', 'safety incident'
            ],
            departments: ['NR Station Management', 'SR Station Management']
        },
        {
            name: 'Accessibility',
            keywords: [
                // Vertical Transportation
                'escalator', 'lift', 'elevator', 'vertical transportation',
                'escalator service', 'lift service', 'elevator service',
                'escalator breakdown', 'lift breakdown', 'elevator malfunction',
                'escalator maintenance', 'lift maintenance', 'elevator repair',
                
                // Accessible Infrastructure
                'ramp', 'wheelchair ramp', 'accessible ramp', 'slope', 'gradient',
                'wheelchair access', 'barrier free access', 'accessible entrance',
                'accessible exit', 'accessible pathway', 'accessible route',
                'level access', 'step free access', 'smooth access',
                
                // Disability Services
                'disabled facilities', 'accessibility', 'barrier free', 'universal access',
                'inclusive access', 'accessible design', 'universal design',
                'accessibility compliance', 'disability friendly', 'specially abled',
                'differently abled', 'divyangjan facilities', 'PwD facilities',
                
                // Mobility Assistance
                'wheelchair assistance', 'mobility assistance', 'porter service',
                'battery operated vehicle', 'BOV', 'wheelchair service',
                'yatri mitra', 'passenger assistance', 'escort service',
                'mobility support', 'movement assistance', 'transfer assistance',
                
                // Accessible Features
                'accessible toilet', 'disabled toilet', 'accessible washroom',
                'accessible counter', 'low height counter', 'accessible ticketing',
                'accessible parking', 'reserved parking', 'accessible seating',
                'priority seating', 'reserved seating', 'accessible coach guidance',
                
                // Visual Accessibility
                'tactile guidance', 'tactile paving', 'tactile strip', 'braille signage',
                'audio announcement', 'voice guidance', 'talking system',
                'large print', 'high contrast signage', 'clear signage',
                
                // Accessibility for Elderly
                'senior citizen facilities', 'elderly facilities', 'geriatric facilities',
                'age friendly', 'senior citizen assistance', 'elderly support',
                'retirement age facilities', 'pension holder facilities',
                
                // Family Accessibility
                'family facilities', 'child friendly', 'stroller access',
                'pram access', 'baby changing facility', 'infant facilities',
                'nursing room', 'family toilet', 'family accommodation'
            ],
            departments: ['NR Station Management', 'SR Station Management']
        },
        {
            name: 'Lighting and Ventilation',
            keywords: [
                // Lighting Systems
                'lighting', 'light', 'illumination', 'station lighting', 'platform lighting',
                'artificial lighting', 'natural lighting', 'adequate lighting',
                'insufficient lighting', 'poor lighting', 'dim lighting',
                'bright lighting', 'proper lighting', 'lighting quality',
                
                // Light Sources
                'bulb', 'tube light', 'fluorescent light', 'LED', 'LED light',
                'CFL', 'halogen light', 'sodium vapor light', 'mercury vapor light',
                'street light', 'flood light', 'spotlight', 'emergency lighting',
                
                // Lighting Issues
                'light not working', 'bulb fused', 'tube light fused', 'flickering light',
                'blinking light', 'dim light', 'broken light', 'damaged light',
                'light replacement', 'light repair', 'lighting maintenance',
                'lighting failure', 'power cut', 'electrical issue',
                
                // Areas Lighting
                'platform lighting', 'waiting room lighting', 'concourse lighting',
                'foot over bridge lighting', 'subway lighting', 'parking lighting',
                'approach road lighting', 'circulating area lighting',
                'toilet lighting', 'staircase lighting',
                
                // Ventilation Systems
                'ventilation', 'air circulation', 'air flow', 'fresh air',
                'natural ventilation', 'mechanical ventilation', 'forced ventilation',
                'exhaust system', 'ventilation system', 'air quality',
                'stuffy air', 'stagnant air', 'poor ventilation',
                
                // Cooling Systems
                'fan', 'ceiling fan', 'exhaust fan', 'ventilation fan',
                'table fan', 'pedestal fan', 'air circulation fan',
                'fan not working', 'fan breakdown', 'fan repair',
                'fan maintenance', 'fan speed', 'fan noise',
                
                // Air Conditioning
                'AC', 'air conditioning', 'air conditioner', 'central AC',
                'split AC', 'window AC', 'AC not working', 'AC breakdown',
                'AC repair', 'AC maintenance', 'AC service', 'cooling',
                'temperature control', 'climate control', 'air cooling',
                
                // Environmental Comfort
                'temperature', 'humidity', 'comfort level', 'ambient temperature',
                'thermal comfort', 'heat', 'cold', 'hot weather', 'cool weather',
                'seasonal comfort', 'weather protection', 'climate adaptation',
                
                // Energy Efficiency
                'energy saving', 'power consumption', 'electricity bill',
                'energy efficient lighting', 'solar lighting', 'renewable energy',
                'LED conversion', 'energy conservation', 'green technology'
            ],
            departments: ['NR Station Management', 'SR Station Management']
        }
    ],
    priority: 'high',
    confidence: 0.8
},
// ----------------------------

'Premium Services': {
    subcategories: [
        {
            name: 'Premium Trains',
            keywords: [
                // Flagship Premium Trains
                'Rajdhani', 'Rajdhani Express', 'Shatabdi', 'Shatabdi Express', 
                'Vande Bharat', 'Vande Bharat Express', 'Train 18', 'semi high speed',
                'Tejas', 'Tejas Express', 'Gatimaan', 'Gatimaan Express', 'fastest train',
                'Duronto', 'Duronto Express', 'non stop express', 'premium train',
                
                // Luxury and Tourist Trains
                'Maharajas Express', 'Palace on Wheels', 'Royal Rajasthan on Wheels',
                'Deccan Odyssey', 'Golden Chariot', 'Fairy Queen', 'Orient Express',
                'luxury train', 'heritage train', 'tourist train', 'royal train',
                'palace train', 'premium luxury', 'world class train',
                
                // Premium Service Categories
                'superfast', 'express', 'premium service', 'luxury service',
                'executive service', 'first class service', 'business class',
                'high speed train', 'bullet train', 'modern train', 'advanced train',
                
                // Premium Train Features
                'air conditioned train', 'fully AC train', 'climate controlled',
                'modern amenities', 'world class facilities', 'international standard',
                'premium experience', 'luxury experience', 'royal experience',
                'exclusive train', 'special train', 'chartered train',
                
                // Train Categories
                'premium express', 'luxury express', 'superfast express',
                'intercity express', 'double decker', 'multi tier', 'sleeper class premium',
                'day train', 'overnight luxury', 'long distance premium',
                
                // International Comparisons
                'bullet train equivalent', 'European standard', 'Japanese standard',
                'international quality', 'world class standard', 'global standard'
            ],
            departments: ['Premium User Support']
        },
        {
            name: 'Premium Classes',
            keywords: [
                // AC Classes
                '1A', '1AC', 'AC first class', 'first AC', 'AC 1', 'first class AC',
                '2A', '2AC', 'AC two tier', 'AC 2 tier', 'second AC', 'two tier AC',
                '3A', '3AC', 'AC three tier', 'AC 3 tier', 'third AC', 'three tier AC',
                
                // Chair Car Classes
                'executive chair car', 'EC', 'executive class', 'chair car premium',
                'AC chair car', 'CC', 'chair car', 'executive chair', 'business chair',
                'premium chair car', 'luxury chair car', 'reclining chair',
                
                // Premium Coaches
                'premium coach', 'luxury coach', 'VIP coach', 'special coach',
                'executive coach', 'business coach', 'first class coach',
                'deluxe coach', 'superior coach', 'enhanced coach',
                
                // Suite and Cabin Types
                'presidential suite', 'deluxe cabin', 'junior suite', 'suite cabin',
                'private cabin', 'luxury cabin', 'executive cabin', 'VIP cabin',
                'family cabin', 'couple cabin', 'single cabin', 'twin cabin',
                
                // Luxury Accommodations
                'private compartment', 'exclusive compartment', 'premium compartment',
                'luxury compartment', 'deluxe compartment', 'superior compartment',
                'ensuite bathroom', 'private bathroom', 'attached toilet',
                
                // Seating Arrangements
                'reclining seat', 'swivel chair', 'leather seat', 'premium seating',
                'ergonomic seat', 'adjustable seat', 'comfortable seating',
                'spacious seating', 'window seat premium', 'aisle seat premium',
                
                // Berth Types
                'lower berth premium', 'upper berth premium', 'side berth premium',
                'coupe berth', 'cabin berth', 'private berth', 'luxury berth',
                'premium berth', 'deluxe berth', 'superior berth'
            ],
            departments: ['Premium User Support']
        },
        {
            name: 'Premium Amenities',
            keywords: [
                // Food and Beverage Services
                'premium catering', 'gourmet food', 'fine dining', 'chef special',
                'multicourse meal', 'à la carte', 'continental cuisine', 'indian cuisine',
                'welcome drink', 'complimentary meal', 'free food', 'inclusive meal',
                'breakfast included', 'lunch included', 'dinner included', 'snacks included',
                'premium menu', 'luxury menu', 'executive menu', 'special menu',
                
                // Beverages
                'complimentary beverages', 'free drinks', 'tea coffee included',
                'mineral water', 'soft drinks', 'juices', 'welcome tea',
                'premium beverages', 'imported beverages', 'fresh juices',
                
                // Comfort Items
                'bed roll', 'pillow', 'blanket', 'towel', 'toiletries', 'amenity kit',
                'linen', 'bed sheet', 'pillow cover', 'mattress', 'sleeping kit',
                'comfort kit', 'travel kit', 'hygiene kit', 'grooming kit', 'bedroll',
                
                // Entertainment and Information
                'newspaper', 'magazine', 'entertainment', 'reading material',
                'inflight magazine', 'travel guide', 'destination guide',
                'entertainment system', 'audio system', 'video system',
                'personal entertainment', 'onboard entertainment',
                
                // Technology Amenities
                'wifi', 'internet', 'free wifi', 'broadband', 'high speed internet',
                'charging point', 'power outlet', 'USB port', 'laptop charging',
                'mobile charging', 'universal charging', 'power socket',
                'electrical outlet', 'USB charging', 'wireless charging',
                
                // Personal Services
                'shoe shine', 'laundry service', 'valet service', 'room service',
                'housekeeping', 'turndown service', 'wake up call',
                'personal assistance', 'butler service', 'concierge service',
                
                // Safety and Security
                'personal locker', 'safe deposit', 'security deposit',
                'luggage handling', 'baggage service', 'porter service',
                'travel insurance', 'medical kit', 'first aid'
            ],
            departments: ['Premium Catering Team', 'Premium Maintenance Team']
        },
        {
            name: 'Premium Services',
            keywords: [
                // Staff and Personnel
                'concierge', 'attendant', 'steward', 'cabin crew', 'hostess',
                'train hostess', 'cabin attendant', 'personal attendant',
                'service attendant', 'premium staff', 'dedicated staff',
                'trained staff', 'courteous staff', 'professional staff',
                
                // Service Types
                'personalized service', 'dedicated service', 'exclusive service',
                'bespoke service', 'customized service', 'tailored service',
                'individual attention', 'personal care', 'special attention',
                'VIP treatment', 'royal treatment', 'luxury treatment',
                
                // Booking and Check-in
                'priority booking', 'fast track booking', 'express booking',
                'VIP booking', 'executive booking', 'premium booking',
                'advance booking', 'guaranteed booking', 'confirmed booking',
                'priority check-in', 'express check-in', 'fast track check-in',
                
                // Boarding and Travel
                'priority boarding', 'early boarding', 'premium boarding',
                'separate boarding', 'exclusive boarding', 'VIP boarding',
                'red carpet service', 'welcome service', 'greeting service',
                
                // Support Services
                'travel assistance', 'journey assistance', 'travel support',
                'customer support', 'guest relations', 'passenger relations',
                '24x7 support', 'round the clock service', 'emergency support',
                'medical assistance', 'special assistance', 'disability support',
                
                // Communication Services
                'multilingual staff', 'language support', 'interpretation service',
                'translation service', 'communication assistance',
                'information service', 'guidance service', 'advisory service',
                
                // Exclusive Access
                'lounge access', 'executive lounge', 'premium lounge',
                'VIP lounge', 'private lounge', 'exclusive area',
                'members only', 'restricted access', 'special access'
            ],
            departments: ['Premium User Support']
        },
        {
            name: 'Premium Pricing',
            keywords: [
                // Fare Types
                'premium fare', 'executive fare', 'luxury fare', 'first class fare',
                'business class fare', 'VIP fare', 'special fare', 'exclusive fare',
                'deluxe fare', 'superior fare', 'enhanced fare', 'upgraded fare',
                
                // Dynamic Pricing
                'dynamic fare', 'dynamic pricing', 'variable pricing', 'flexible pricing',
                'surge pricing', 'peak pricing', 'demand based pricing',
                'time based pricing', 'season based pricing', 'route based pricing',
                
                // Flexible Fares
                'flexi fare', 'flexible fare', 'changeable fare', 'refundable fare',
                'cancellable fare', 'modifiable fare', 'transferable fare',
                'no penalty fare', 'free change fare', 'free cancellation',
                
                // Premium Pricing Models
                'premium pricing', 'luxury pricing', 'executive pricing',
                'VIP pricing', 'special pricing', 'exclusive pricing',
                'all inclusive pricing', 'package pricing', 'bundled pricing',
                
                // Value Added Services
                'value added service', 'premium package', 'luxury package',
                'all inclusive package', 'comprehensive package', 'complete package',
                'executive package', 'VIP package', 'special package',
                
                // Additional Charges
                'premium charges', 'luxury charges', 'executive charges',
                'surcharge', 'additional cost', 'extra charges', 'supplement',
                'premium supplement', 'luxury supplement', 'service charges',
                
                // Payment Options
                'premium payment', 'flexible payment', 'installment payment',
                'deferred payment', 'advance payment', 'full payment',
                'partial payment', 'corporate payment', 'group payment',
                
                // Pricing Benefits
                'inclusive fare', 'all inclusive', 'no hidden charges',
                'transparent pricing', 'upfront pricing', 'fixed pricing',
                'guaranteed pricing', 'locked pricing', 'protected pricing',
                
                // Tatkal and Emergency
                'premium tatkal', 'tatkal premium', 'emergency booking',
                'last minute booking', 'urgent booking', 'immediate booking',
                'same day booking', 'express booking', 'rush booking'
            ],
            departments: ['Premium User Support']
        }
    ],
    priority: 'high',
    confidence: 0.9
},

// ----------------------------
'Social Media & PR': {
    subcategories: [
        {
            name: 'Social Media Platforms',
            keywords: [
                // Platform Names
                'twitter', 'facebook', 'instagram', 'youtube', 'linkedin', 'whatsapp',
                'telegram', 'snapchat', 'tiktok', 'social media', 'social network',
                'online platform', 'digital platform', 'social platform',
                
                // Railway Specific Handles
                '@RailMinIndia', '@RailwayMinIndia', '@IndianRailways', '@IRCTC_Ltd',
                '@RailwaySeva', '@WesternRly', '@EasternRailway', '@NorthernRly',
                '@SouthernRly', '@CentralRailway', '@SouthWesternRly', '@SouthEastRly',
                '@NCRailway', '@NWRailway', '@NERailway', '@NFRailway',
                
                // Social Media Actions
                'post', 'tweet', 'share', 'like', 'comment', 'retweet', 'reply',
                'mention', 'tag', 'handle', 'follow', 'unfollow', 'block',
                'report', 'direct message', 'DM', 'private message', 'PM',
                
                // Content Types
                'viral', 'trending', 'hashtag', 'viral post', 'viral tweet',
                'viral video', 'viral photo', 'viral story', 'going viral',
                'trending topic', 'trending hashtag', 'viral complaint',
                
                // Engagement Metrics
                'followers', 'following', 'likes', 'shares', 'retweets', 'comments',
                'engagement rate', 'reach', 'impressions', 'views', 'clicks',
                'social media engagement', 'online engagement', 'digital engagement',
                
                // Social Media Features
                'story', 'reel', 'live', 'live stream', 'video call', 'voice message',
                'status', 'timeline', 'feed', 'newsfeed', 'notification',
                'alert', 'mention notification', 'tag notification',
                
                // Content Creation
                'photo', 'video', 'image', 'screenshot', 'screen recording',
                'selfie', 'boomerang', 'gif', 'meme', 'content', 'post content',
                'user generated content', 'UGC', 'passenger content',
                
                // Social Media Complaints
                'complained on twitter', 'posted on facebook', 'shared on instagram',
                'uploaded on youtube', 'tweeted complaint', 'social media complaint',
                'online complaint', 'digital complaint', 'public complaint online'
            ],
            departments: ['Social Media Crisis Team']
        },
        {
            name: 'Public Relations',
            keywords: [
                // Media Types
                'media', 'press', 'news', 'newspaper', 'print media', 'digital media',
                'TV', 'television', 'radio', 'podcast', 'broadcast', 'telecast',
                'online news', 'web portal', 'news portal', 'news website',
                
                // Media Personnel
                'journalist', 'reporter', 'correspondent', 'news anchor', 'editor',
                'columnist', 'blogger', 'freelancer', 'stringer', 'photographer',
                'videographer', 'cameraman', 'media person', 'press person',
                
                // Media Coverage
                'coverage', 'story', 'article', 'news story', 'feature story',
                'breaking news', 'exclusive story', 'investigative report',
                'news report', 'media report', 'press coverage', 'news coverage',
                'media attention', 'press attention', 'public attention',
                
                // Press Activities
                'interview', 'press interview', 'media interview', 'exclusive interview',
                'statement', 'press statement', 'official statement', 'media statement',
                'press release', 'media release', 'official release', 'public release',
                'announcement', 'press announcement', 'media announcement',
                'official announcement', 'public announcement',
                
                // News Channels and Publications
                'Times of India', 'Hindustan Times', 'Indian Express', 'Hindu',
                'Economic Times', 'Business Standard', 'NDTV', 'CNN News18',
                'Times Now', 'Republic TV', 'India Today', 'Outlook',
                'regional news', 'local news', 'national news', 'international news',
                
                // PR Activities
                'public relations', 'PR campaign', 'media campaign', 'publicity campaign',
                'press conference', 'media briefing', 'press meet', 'media interaction',
                'press tour', 'media tour', 'facility visit', 'media visit',
                
                // Communication Strategy
                'communication', 'messaging', 'narrative', 'positioning', 'branding',
                'image building', 'reputation building', 'credibility', 'transparency',
                'accountability', 'responsiveness', 'proactive communication'
            ],
            departments: ['Public Relations Crisis Team']
        },
        {
            name: 'Reputation Management',
            keywords: [
                // Reputation Terms
                'reputation', 'image', 'brand', 'brand image', 'public image',
                'corporate image', 'organizational image', 'institutional image',
                'public opinion', 'public perception', 'perception', 'credibility',
                'trustworthiness', 'reliability', 'brand value', 'goodwill',
                
                // Negative Publicity
                'negative publicity', 'bad press', 'adverse publicity', 'unfavorable coverage',
                'negative coverage', 'critical coverage', 'hostile coverage',
                'damaging news', 'harmful publicity', 'reputation damage',
                'image crisis', 'brand crisis', 'public relations crisis',
                
                // Crisis Terms
                'controversy', 'scandal', 'crisis', 'public crisis', 'media crisis',
                'reputation crisis', 'communication crisis', 'trust crisis',
                'confidence crisis', 'credibility crisis', 'perception crisis',
                
                // Damage Control
                'damage control', 'crisis management', 'crisis communication',
                'reputation management', 'image management', 'perception management',
                'public relations', 'PR', 'damage limitation', 'reputation repair',
                'reputation recovery', 'crisis response', 'crisis intervention',
                
                // Public Sentiment
                'public outrage', 'public anger', 'public dissatisfaction',
                'passenger anger', 'customer dissatisfaction', 'public criticism',
                'widespread criticism', 'mass criticism', 'severe criticism',
                'harsh criticism', 'public backlash', 'passenger backlash',
                
                // Service Perception
                'service quality perception', 'safety perception', 'reliability perception',
                'efficiency perception', 'modernization image', 'technology image',
                'customer service image', 'passenger experience image',
                
                // Stakeholder Relations
                'stakeholder perception', 'government relations', 'political relations',
                'media relations', 'community relations', 'passenger relations',
                'customer relations', 'public affairs', 'external relations',
                
                // Recovery and Improvement
                'reputation building', 'image building', 'trust building',
                'confidence building', 'credibility restoration', 'positive publicity',
                'good press', 'favorable coverage', 'success stories', 'achievements'
            ],
            departments: ['Public Relations Crisis Team']
        },
        {
            name: 'Engagement',
            keywords: [
                // Engagement Types
                'engagement', 'customer engagement', 'passenger engagement',
                'citizen engagement', 'public engagement', 'social engagement',
                'digital engagement', 'online engagement', 'interactive engagement',
                
                // Interaction Terms
                'interaction', 'customer interaction', 'passenger interaction',
                'public interaction', 'social interaction', 'two way communication',
                'dialogue', 'conversation', 'discussion', 'exchange',
                
                // Response and Communication
                'response', 'quick response', 'immediate response', 'timely response',
                'real time response', 'automated response', 'personalized response',
                'reply', 'feedback', 'acknowledgment', 'confirmation',
                
                // Customer Feedback
                'review', 'rating', 'testimonial', 'recommendation', 'endorsement',
                'user review', 'passenger review', 'customer review', 'travel review',
                'service review', 'experience review', 'journey review',
                
                // Content Creators
                'influencer', 'travel influencer', 'social media influencer',
                'blogger', 'travel blogger', 'railway blogger', 'transport blogger',
                'vlogger', 'youtube vlogger', 'travel vlogger', 'content creator',
                'digital creator', 'social media creator', 'online creator',
                
                // Community Building
                'community', 'online community', 'passenger community', 'railway community',
                'fan community', 'user community', 'social community',
                'community management', 'community engagement', 'community building',
                
                // User Generated Content
                'user generated content', 'passenger content', 'travel content',
                'journey documentation', 'travel experience sharing', 'story sharing',
                'photo sharing', 'video sharing', 'experience sharing',
                
                // Advocacy and Promotion
                'brand advocacy', 'passenger advocacy', 'customer advocacy',
                'word of mouth', 'organic promotion', 'positive promotion',
                'brand ambassadorship', 'railway promotion', 'service promotion'
            ],
            departments: ['Content Moderation Team']
        },
        {
            name: 'Complaints Going Viral',
            keywords: [
                // Viral Complaints
                'viral complaint', 'viral grievance', 'trending complaint', 'viral issue',
                'public complaint', 'widespread complaint', 'mass complaint',
                'collective complaint', 'group complaint', 'community complaint',
                
                // Public Outcry
                'public outcry', 'passenger outcry', 'customer outcry', 'citizen outcry',
                'widespread dissatisfaction', 'mass dissatisfaction', 'collective anger',
                'public anger', 'passenger anger', 'customer anger', 'public fury',
                
                // Social Media Storms
                'social media storm', 'twitter storm', 'facebook storm', 'online storm',
                'digital storm', 'viral storm', 'social media outrage',
                'online outrage', 'digital outrage', 'viral outrage',
                
                // Trending Issues
                'trending issue', 'trending topic', 'trending problem', 'viral problem',
                'widespread issue', 'systemic issue', 'recurring issue', 'persistent issue',
                'chronic problem', 'ongoing issue', 'unresolved issue',
                
                // Media Amplification
                'media amplification', 'news pickup', 'press pickup', 'viral pickup',
                'mainstream media coverage', 'news coverage', 'media attention',
                'press attention', 'public attention', 'national attention',
                
                // Crisis Escalation
                'escalated complaint', 'escalating issue', 'mounting pressure',
                'growing criticism', 'increasing backlash', 'widespread criticism',
                'severe backlash', 'intense criticism', 'harsh criticism',
                
                // Viral Content Types
                'viral video', 'viral photo', 'viral post', 'viral tweet',
                'viral story', 'viral incident', 'viral experience', 'viral journey',
                'passenger video gone viral', 'complaint video viral',
                
                // Public Pressure
                'public pressure', 'media pressure', 'social pressure', 'political pressure',
                'passenger pressure', 'customer pressure', 'citizen pressure',
                'accountability pressure', 'transparency demand', 'action demand',
                
                // Crisis Management
                'crisis control', 'viral management', 'trend management', 'damage control',
                'reputation management', 'crisis response', 'emergency response',
                'immediate action required', 'urgent intervention needed',
                
                // Platform Specific Viral Terms
                'trending on twitter', 'viral on facebook', 'youtube viral',
                'instagram viral', 'retweet storm', 'share storm', 'hashtag campaign',
                'social campaign', 'viral campaign', 'awareness campaign'
            ],
            departments: ['Social Media Crisis Team']
        }
    ],
    priority: 'medium',
    confidence: 0.85
}

}
);

// Additional configuration constants
export const ANALYSIS_CONFIG = Object.freeze({
    MIN_TEXT_LENGTH: 20,
    MIN_CONFIDENCE_THRESHOLD: 0.7,
    INTERNAL_CONFIDENCE_THRESHOLD: 0.4,
    MIN_KEYWORD_MATCHES: 1,
    DEBOUNCE_DELAY: 1000, // milliseconds
    MAX_SUGGESTIONS: 3
});

// Priority weights for confidence calculation
export const PRIORITY_WEIGHTS = Object.freeze({
    critical: 1.0,
    urgent: 0.95,
    high: 0.9,
    medium: 0.8,
    low: 0.7
});

// Default department assignments
export const DEFAULT_ASSIGNMENTS = Object.freeze({
    category: 'To be assigned',
    department: 'General Grievance Cell',
    priority: 'medium'
});