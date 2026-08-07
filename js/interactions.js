(function(){
var ASSET_MAP = {"https://amara-makeup.aura.build/": "assets/612f5c14b6ed144a_file.html", "https://cdn.jsdelivr.net/npm/iconify-icon@2.1.0/dist/iconify-icon.min.js": "assets/758d94838db0cafd_iconify-icon.min.js", "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap": "assets/f32c4a47e91d6996_css2.css", "https://amara-makeup.aura.build/assets/index-CuopC2LA.css": "assets/941b77a08b96329e_index-CuopC2LA.css", "https://amara-makeup.aura.build/assets/index-BjiGCETV.js": "assets/index-BjiGCETV.js", "https://amara-makeup.aura.build/assets/refresh-cw-DXeCdtZx.js": "assets/refresh-cw-DXeCdtZx.js", "https://amara-makeup.aura.build/assets/PublicSharedSiteResolver-dg1YspvD.js": "assets/PublicSharedSiteResolver-dg1YspvD.js", "https://amara-makeup.aura.build/assets/tabs-KC1RpGev.js": "assets/tabs-KC1RpGev.js", "https://amara-makeup.aura.build/assets/index-CJ0l5I5k.js": "assets/index-CJ0l5I5k.js", "https://amara-makeup.aura.build/assets/index-BdQq_4o_.js": "assets/index-BdQq_4o_.js", "https://amara-makeup.aura.build/assets/ScreenCapture-CgpIYB2t.js": "assets/ScreenCapture-CgpIYB2t.js", "https://amara-makeup.aura.build/assets/checkbox-B9D03kZL.js": "assets/checkbox-B9D03kZL.js", "https://amara-makeup.aura.build/assets/avatar-BAvdCTM5.js": "assets/avatar-BAvdCTM5.js", "https://amara-makeup.aura.build/assets/target-BgbdeLWF.js": "assets/target-BgbdeLWF.js", "https://amara-makeup.aura.build/assets/supabaseTokenFirewall-Q0EZZ_Mc.js": "assets/supabaseTokenFirewall-Q0EZZ_Mc.js", "https://amara-makeup.aura.build/assets/iconBase-DJ2mWu9o.js": "assets/iconBase-DJ2mWu9o.js", "https://amara-makeup.aura.build/assets/CustomPreviewContainer-jKY4Yh6M.js": "assets/CustomPreviewContainer-jKY4Yh6M.js", "https://amara-makeup.aura.build/assets/htmlToReactConversion-Bl4sudjp.js": "assets/htmlToReactConversion-Bl4sudjp.js", "https://amara-makeup.aura.build/assets/save-VylBa4Ng.js": "assets/save-VylBa4Ng.js", "https://amara-makeup.aura.build/assets/reactLocalPreviewSupport-CrKYDiAb.js": "assets/reactLocalPreviewSupport-CrKYDiAb.js", "https://amara-makeup.aura.build/assets/shuffle-DX_Ch-Ky.js": "assets/shuffle-DX_Ch-Ky.js", "https://amara-makeup.aura.build/assets/bookmark-DKgdJj0v.js": "assets/bookmark-DKgdJj0v.js", "https://amara-makeup.aura.build/assets/undo-2-C12duF20.js": "assets/undo-2-C12duF20.js", "https://amara-makeup.aura.build/assets/cloud-upload-BJNNH4WP.js": "assets/cloud-upload-BJNNH4WP.js", "https://amara-makeup.aura.build/assets/TemplateArtifactsService-NJDbVGgW.js": "assets/TemplateArtifactsService-NJDbVGgW.js", "https://amara-makeup.aura.build/assets/lock-DMHOuKlK.js": "assets/lock-DMHOuKlK.js", "https://amara-makeup.aura.build/assets/camera-BHj42iks.js": "assets/camera-BHj42iks.js", "https://amara-makeup.aura.build/assets/reactPreviewFiles-dS6aP0GR.js": "assets/reactPreviewFiles-dS6aP0GR.js", "https://amara-makeup.aura.build/assets/index-B_D2mWt0.js": "assets/index-B_D2mWt0.js", "https://amara-makeup.aura.build/assets/PublishedReactArtifactPreview-BBKgZxVN.js": "assets/PublishedReactArtifactPreview-BBKgZxVN.js", "https://amara-makeup.aura.build/assets/select-Do-SsAoI.js": "assets/select-Do-SsAoI.js", "https://amara-makeup.aura.build/assets/previewFrameSizes-DbqEjwpB.js": "assets/previewFrameSizes-DbqEjwpB.js", "https://amara-makeup.aura.build/assets/copy-wBfwUiCw.js": "assets/copy-wBfwUiCw.js", "https://amara-makeup.aura.build/assets/reactProjectRepair-CYjceBfQ.js": "assets/reactProjectRepair-CYjceBfQ.js", "https://amara-makeup.aura.build/assets/RemixPopover-B8-ZW_DO.js": "assets/RemixPopover-B8-ZW_DO.js", "https://amara-makeup.aura.build/assets/reactCmsRuntime-DJx9dyyb.js": "assets/reactCmsRuntime-DJx9dyyb.js", "https://amara-makeup.aura.build/assets/cmsLoopUtils-B7J6ZFqJ.js": "assets/cmsLoopUtils-B7J6ZFqJ.js", "https://amara-makeup.aura.build/assets/sandpackUtils-Dlcl8Rou.js": "assets/sandpackUtils-Dlcl8Rou.js", "https://amara-makeup.aura.build/assets/iframeLinkUtils-CWzipY19.js": "assets/iframeLinkUtils-CWzipY19.js", "https://amara-makeup.aura.build/assets/reactSourceValidation-BfX62sZa.js": "assets/reactSourceValidation-BfX62sZa.js", "https://amara-makeup.aura.build/assets/reactPublishing-BHfO_PeK.js": "assets/reactPublishing-BHfO_PeK.js", "https://amara-makeup.aura.build/assets/reactProjectPages-oL-ViPrD.js": "assets/reactProjectPages-oL-ViPrD.js", "https://amara-makeup.aura.build/assets/SandpackContainer-DDUxVzP2.js": "assets/SandpackContainer-DDUxVzP2.js", "https://amara-makeup.aura.build/assets/prism-0uLHZJ7x.js": "assets/prism-0uLHZJ7x.js", "https://hoirqrkdgbmvpwutwuwj.supabase.co/rest/v1/shared_react_projects?select=*&slug=ilike.amara-makeup": "assets/4f53cda18c2baa0c_shared_react_projects.json", "https://hoirqrkdgbmvpwutwuwj.supabase.co/rest/v1/rpc/get_public_shared_react_project_by_slug": "assets/4f53cda18c2baa0c_shared_react_projects.json", "https://hoirqrkdgbmvpwutwuwj.supabase.co/rest/v1/shared_react_projects?select=*&custom_domain=ilike.amara-makeup.aura.build": "assets/4f53cda18c2baa0c_shared_react_projects.json", "https://hoirqrkdgbmvpwutwuwj.supabase.co/rest/v1/rpc/get_public_shared_react_project_by_domain": "assets/4f53cda18c2baa0c_shared_react_projects.json", "https://hoirqrkdgbmvpwutwuwj.supabase.co/rest/v1/shared_react_projects?select=*&custom_domain=ilike.aura.build": "assets/4f53cda18c2baa0c_shared_react_projects.json", "https://hoirqrkdgbmvpwutwuwj.supabase.co/rest/v1/shared_code?select=*&slug=ilike.amara-makeup": "assets/98fcad15dd2421e8_shared_code.json", "https://hoirqrkdgbmvpwutwuwj.supabase.co/rest/v1/shared_code?select=slug%2Ccreated_at&user_id=eq.2e815afb-cac1-4c01-90e1-cf3810246e35&order=created_at.desc": "assets/601984b45d55962d_shared_code.json", "https://hoirqrkdgbmvpwutwuwj.supabase.co/rest/v1/public_author_profiles?select=id%2Cfull_name%2Cavatar_url%2Cbio%2Cslug%2Ccreated_at%2Cviews%2Cis_featured%2Cwebsite%2Clocation%2Cis_pro&id=in.%282e815afb-cac1-4c01-90e1-cf3810246e35%29": "assets/0d20ab5d98d72c12_public_author_profiles.json", "https://amara-makeup.aura.build/logo-aura-gray.svg": "assets/23a9f32ff7d46956_logo-aura-gray.svg", "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@400;500;600&display=swap": "assets/128c0ce84d9cd4b9_css2.css", "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&display=swap": "assets/8c515a27fa779fbd_css2.css", "https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2": "assets/c940764593d0fe5d_UcC73FwrK3iLTeHuS_nVMrMxCp50Sj.woff2", "https://cdn.tailwindcss.com/3.4.17": "assets/176e894661aa9cdc_3.4.17", "https://amara-makeup.aura.build/public/assets/_vinext_fonts/geist-8ac0455e797f/geist-001175b1.woff2": "assets/042a93203a9de7b1_geist-001175b1.woff2", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/preview-images/amara-makeup.png": "assets/c68f6e305125f285_amara-makeup.png", "https://amara-makeup.aura.build/public/assets/_vinext_fonts/geist-8ac0455e797f/geist-ff2310f5.woff2": "assets/042a93203a9de7b1_geist-001175b1.woff2", "https://amara-makeup.aura.build/public/assets/_vinext_fonts/geist-8ac0455e797f/geist-875ccdd4.woff2": "assets/042a93203a9de7b1_geist-001175b1.woff2", "https://amara-makeup.aura.build/public/assets/_vinext_fonts/geist-mono-00e989178794/geist-mono-44e03052.woff2": "assets/042a93203a9de7b1_geist-001175b1.woff2", "https://amara-makeup.aura.build/public/assets/_vinext_fonts/geist-8ac0455e797f/geist-52306abf.woff2": "assets/042a93203a9de7b1_geist-001175b1.woff2", "https://amara-makeup.aura.build/public/assets/_vinext_fonts/geist-8ac0455e797f/geist-98bbbccb.woff2": "assets/042a93203a9de7b1_geist-001175b1.woff2", "https://amara-makeup.aura.build/public/assets/_vinext_fonts/geist-mono-00e989178794/geist-mono-971fb274.woff2": "assets/042a93203a9de7b1_geist-001175b1.woff2", "https://amara-makeup.aura.build/public/assets/_vinext_fonts/geist-mono-00e989178794/geist-mono-013b2f2f.woff2": "assets/042a93203a9de7b1_geist-001175b1.woff2", "https://amara-makeup.aura.build/public/assets/_vinext_fonts/geist-mono-00e989178794/geist-mono-0638449e.woff2": "assets/042a93203a9de7b1_geist-001175b1.woff2", "https://amara-makeup.aura.build/public/assets/_vinext_fonts/geist-mono-00e989178794/geist-mono-f6b33328.woff2": "assets/042a93203a9de7b1_geist-001175b1.woff2", "https://amara-makeup.aura.build/public/assets/_vinext_fonts/geist-mono-00e989178794/geist-mono-44745446.woff2": "assets/042a93203a9de7b1_geist-001175b1.woff2", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/72adc0f8-ad1f-4732-a5bf-c000b45152a2_320w.webp": "assets/c6465b2a9a6dda4f_72adc0f8-ad1f-4732-a5bf-c000b4.webp", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c3934fcf-a323-409a-a5ef-dc54721d3a70_3840w.png": "assets/b8db5abca1d1df65_c3934fcf-a323-409a-a5ef-dc5472.png", "https://fonts.gstatic.com/s/playfairdisplay/v40/nuFiD-vYSZviVYUb_rj3ij__anPXDTzYgEM86xQ.woff2": "assets/5d91eb5d522a0308_nuFiD-vYSZviVYUb_rj3ij__anPXDT.woff2", "https://fonts.gstatic.com/s/greatvibes/v21/RWmMoKWR9v4ksMfaWd_JN9XFiaQoDmlr.woff2": "assets/0237c8316409c1e4_RWmMoKWR9v4ksMfaWd_JN9XFiaQoDm.woff2", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0fee355a-f90d-47ab-bb28-cebea22a349b_3840w.png": "assets/c4e73bcbc9425d41_0fee355a-f90d-47ab-bb28-cebea2.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/rest/v1/rpc/get_public_share_project_context": "assets/4a8c35c0d5d2e4a8_get_public_share_project_conte.json", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9380490b-4de9-43ef-8dc7-a3082aa268b4_3840w.png": "assets/ffdc192e89d7b36e_9380490b-4de9-43ef-8dc7-a3082a.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fcc020b5-2158-42f7-89ba-fa071b9dc573_3840w.png": "assets/cbf6c69a1cdda192_fcc020b5-2158-42f7-89ba-fa071b.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e4a8fea-ed57-4813-ba15-6944a427941b_3840w.png": "assets/fcc30831498460a0_3e4a8fea-ed57-4813-ba15-6944a4.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/057c1bd3-3aa9-4550-ab07-782107781df3_3840w.png": "assets/8670951b51361f44_057c1bd3-3aa9-4550-ab07-782107.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b7ac4fe4-eb0e-475f-bbd1-e5f4427bbca0_3840w.png": "assets/fc22f873afebe0b2_b7ac4fe4-eb0e-475f-bbd1-e5f442.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a256527b-e942-4c83-8ce9-89876b1c4294_3840w.png": "assets/22d24b8841634472_a256527b-e942-4c83-8ce9-89876b.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/rest/v1/shared_code?select=code%2Cprivate%2Cuser_id%2Cshare_source_code&slug=ilike.aurelia-studios-72": "assets/5b6814f3197ca646_shared_code.json", "https://hoirqrkdgbmvpwutwuwj.supabase.co/rest/v1/rpc/get_public_project_chats_for_share": "assets/08a03c2fed1f6a4e_get_public_project_chats_for_s.json", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/776a9685-3d5f-49b6-ab4c-40f84b7ed3ef_3840w.webp": "assets/121478e196acdd96_776a9685-3d5f-49b6-ab4c-40f84b.webp", "https://hoirqrkdgbmvpwutwuwj.supabase.co/rest/v1/projects?select=transition_type%2Ctransition_duration_ms%2Ctransition_easing%2Ctransition_distance_px&id=eq.8127d7fd-9de7-4a2d-976e-d4ee3bb920aa": "assets/4f53cda18c2baa0c_shared_react_projects.json", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8ffe8c26-36ca-4ff5-8fc3-05926a4368f4_3840w.png": "assets/25946488d7c1f110_8ffe8c26-36ca-4ff5-8fc3-05926a.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1d2636b-eab2-42a4-b867-975a1c8bf16c_3840w.png": "assets/10ca61a5d79e261b_f1d2636b-eab2-42a4-b867-975a1c.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/533a16b9-9e5e-49d1-a4ea-83f9178889ff_320w.png": "assets/279ea55e15746a5a_533a16b9-9e5e-49d1-a4ea-83f917.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5dd5462d-f090-44eb-9c08-2056c6d4df7f_320w.webp": "assets/b506d21a89d751e9_5dd5462d-f090-44eb-9c08-2056c6.webp", "https://hoirqrkdgbmvpwutwuwj.supabase.co/rest/v1/shared_code?select=code%2Cprivate%2Cuser_id%2Cshare_source_code&slug=ilike.mestudio": "assets/a098f90fa3947ecc_shared_code.json", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d2b1f103-c46f-4cd7-beac-ed6f0842e29b_3840w.png": "assets/46fe687914b577b1_d2b1f103-c46f-4cd7-beac-ed6f08.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d349bed-8936-4c72-b8b5-8a0188744685_3840w.png": "assets/9bf6e61844842819_7d349bed-8936-4c72-b8b5-8a0188.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/2e815afb-cac1-4c01-90e1-cf3810246e35/1784394304429-78eebee1-aa2b-48f9-a741-cecd859d25d3.mp4": "assets/0aaafe86ce7d2e41_1784394304429-78eebee1-aa2b-48.mp4", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/24abf394-9048-432a-a55e-1a5d65741054_1600w.png": "assets/5768279ba3ac154d_24abf394-9048-432a-a55e-1a5d65.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/20494b32-1a43-4476-9ec9-6d3e7bc0f738_1600w.png": "assets/48f51e42cc7f588e_20494b32-1a43-4476-9ec9-6d3e7b.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7a0914e0-40a0-48d7-a623-64024ea27ed0_1600w.png": "assets/7b51f1d9c96cb2b2_7a0914e0-40a0-48d7-a623-64024e.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/86928eca-0d35-435a-9769-3eba9a03acc5_1600w.png": "assets/e7066b5a3e59f7a9_86928eca-0d35-435a-9769-3eba9a.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d4b4cc0c-0228-4d0f-b519-93dbaad91edb_1600w.png": "assets/c9c46635813044ce_d4b4cc0c-0228-4d0f-b519-93dbaa.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/150b3911-4da2-40a3-b5eb-c58d411fca38_3840w.png": "assets/b24276cc117d5669_150b3911-4da2-40a3-b5eb-c58d41.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0e87d976-0155-4dbf-895a-64950860efeb_3840w.png": "assets/8921521e7b9fea2a_0e87d976-0155-4dbf-895a-649508.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/552f7e5f-b3a1-4fd1-8923-e15bcba139d0_3840w.png": "assets/4cb7b36a6f158e0d_552f7e5f-b3a1-4fd1-8923-e15bcb.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/06bb449e-dbf1-480c-a397-79fa165eef75_3840w.png": "assets/bde67f981d2451f2_06bb449e-dbf1-480c-a397-79fa16.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7443ec11-7cf6-4c6d-81f7-7f77a17b5bff_3840w.png": "assets/1720858fb170039c_7443ec11-7cf6-4c6d-81f7-7f77a1.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/266191d9-fc5e-4fe1-b60e-fecdb9d5709b_3840w.png": "assets/2958f9338f9d9755_266191d9-fc5e-4fe1-b60e-fecdb9.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/00f3008a-d616-4e49-a3e6-e9bb42660ea0_3840w.png": "assets/50251a4ee404a607_00f3008a-d616-4e49-a3e6-e9bb42.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7e7a4b37-3412-41fb-9333-a710aec7d789_1600w.png": "assets/ab147ee1235731b9_7e7a4b37-3412-41fb-9333-a710ae.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/90176ffb-fd7b-4b78-a7f7-6e584ed998d5_1600w.png": "assets/1cb9f4597b795bee_90176ffb-fd7b-4b78-a7f7-6e584e.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a8619b4e-10be-41b7-a949-09af1b40b379_1600w.png": "assets/cb2c132ecf4b5a03_a8619b4e-10be-41b7-a949-09af1b.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d3e1f755-d92d-4756-9fee-4db5ce1d64b6_3840w.png": "assets/13745b07dc5d8706_d3e1f755-d92d-4756-9fee-4db5ce.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f8c7b0d-4ba6-4093-90a5-f3fb72f19cd9_3840w.png": "assets/085ea4d4b7277eec_5f8c7b0d-4ba6-4093-90a5-f3fb72.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/37558985-2afb-4f9d-806a-0787cb5234f9_1600w.png": "assets/0e1cfb69477f2539_37558985-2afb-4f9d-806a-0787cb.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4599a380-6f8f-4891-abb9-646835190b7e_3840w.png": "assets/653f343c7c8a3750_4599a380-6f8f-4891-abb9-646835.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1010846e-640c-4416-9eaa-5c19e5126209_3840w.png": "assets/b8b5caec62788c3d_1010846e-640c-4416-9eaa-5c19e5.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ad5810dc-99dd-450f-b9b1-b62b31b37be3_3840w.png": "assets/afce06c15a6c01f5_ad5810dc-99dd-450f-b9b1-b62b31.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57b0a09c-c206-4b37-88d8-cb136acc0d45_3840w.png": "assets/4afb5d7b13524693_57b0a09c-c206-4b37-88d8-cb136a.png", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/2e815afb-cac1-4c01-90e1-cf3810246e35/1784397130201-9d588319-0141-42ce-a736-acb900979605.mp4": "assets/5ad4c8b339f6a0b4_1784397130201-9d588319-0141-42.mp4", "https://amara-makeup.aura.build/public/assets/beauty-apply.jpg": "assets/042a93203a9de7b1_geist-001175b1.woff2", "https://amara-makeup.aura.build/public/assets/81hoYLwvjK30M3IP0P7k6cuW288.png": "assets/042a93203a9de7b1_geist-001175b1.woff2", "https://amara-makeup.aura.build/public/assets/beauty-studio.jpg": "assets/042a93203a9de7b1_geist-001175b1.woff2", "https://instagram.com": "assets/b756039758742258_file.html", "https://amara-makeup.aura.build/public/assets/beauty-pinkbrush.jpg": "assets/042a93203a9de7b1_geist-001175b1.woff2", "https://amara-makeup.aura.build/public/assets/beauty-glam.jpg": "assets/042a93203a9de7b1_geist-001175b1.woff2", "https://tiktok.com": "assets/045c852480ac1dbb_file.html", "https://amara-makeup.aura.build/public/assets/beauty-lipstick.jpg": "assets/042a93203a9de7b1_geist-001175b1.woff2", "https://amara-makeup.aura.build/public/assets/beauty-editorial.jpg": "assets/042a93203a9de7b1_geist-001175b1.woff2", "https://amara-makeup.aura.build/public/assets/beauty-bridal.jpg": "assets/042a93203a9de7b1_geist-001175b1.woff2", "https://amara-makeup.aura.build/public/assets/beauty-flatlay.jpg": "assets/042a93203a9de7b1_geist-001175b1.woff2", "https://pinterest.com": "assets/354e599f95b55dde_file.html", "https://amara-makeup.aura.build/public/assets/beauty-brushes.jpg": "assets/042a93203a9de7b1_geist-001175b1.woff2", "https://cdn.tailwindcss.com": "assets/176e894661aa9cdc_3.4.17", "https://amara-makeup.aura.build/public/assets/beauty-closeup.jpg": "assets/042a93203a9de7b1_geist-001175b1.woff2", "https://amara-makeup.aura.build/assets/index-D-P-gz85.js": "assets/index-D-P-gz85.js", "https://amara-makeup.aura.build/assets/base-80a1f760-CzH4wU8z.js": "assets/base-80a1f760-CzH4wU8z.js", "https://amara-makeup.aura.build/assets/index-B2QmxclT.js": "assets/index-B2QmxclT.js", "https://amara-makeup.aura.build/assets/App.js": "assets/App.js", "https://amara-makeup.aura.build/assets/consoleHook-59e792cb-C2qXFmdn.js": "assets/consoleHook-59e792cb-C2qXFmdn.js", "https://amara-makeup.aura.build/assets/index-599aeaf7-CD48wnGJ.js": "assets/index-599aeaf7-CD48wnGJ.js", "https://amara-makeup.aura.build/assets/typescript-fpwc37DC.js": "assets/typescript-fpwc37DC.js", "https://amara-makeup.aura.build/assets/Iridescence-x_eiS8kS.js": "assets/Iridescence-x_eiS8kS.js", "https://amara-makeup.aura.build/assets/DesignSystemsService-Brghrmcg.js": "assets/DesignSystemsService-Brghrmcg.js", "https://amara-makeup.aura.build/assets/calendar-C7y2Kk1Q.js": "assets/calendar-C7y2Kk1Q.js", "https://amara-makeup.aura.build/assets/list-BGhmFhn4.js": "assets/list-BGhmFhn4.js", "https://amara-makeup.aura.build/assets/LibraryHero-BcF_0i6t.js": "assets/LibraryHero-BcF_0i6t.js", "https://amara-makeup.aura.build/assets/cancel-Cfsn-Koc.js": "assets/cancel-Cfsn-Koc.js", "https://amara-makeup.aura.build/assets/grid-3x3-CKvO2mLn.js": "assets/grid-3x3-CKvO2mLn.js", "https://amara-makeup.aura.build/assets/componentCenteringUtils-D5WdjxUy.js": "assets/componentCenteringUtils-D5WdjxUy.js", "https://amara-makeup.aura.build/assets/maximize-2-BBSZHbfC.js": "assets/maximize-2-BBSZHbfC.js", "https://amara-makeup.aura.build/assets/infiniteScrollingUtils-DsEAlSMR.js": "assets/infiniteScrollingUtils-DsEAlSMR.js", "https://amara-makeup.aura.build/assets/ChatHistoryPopover-oOOn75C6.js": "assets/ChatHistoryPopover-oOOn75C6.js", "https://amara-makeup.aura.build/assets/index-BhebwVv-.js": "assets/index-BhebwVv-.js", "https://amara-makeup.aura.build/assets/canvasReviewService-DIS5pyHS.js": "assets/canvasReviewService-DIS5pyHS.js", "https://amara-makeup.aura.build/assets/iconify-BJRKZTaH.js": "assets/iconify-BJRKZTaH.js", "https://amara-makeup.aura.build/assets/ReasoningLoader-Ba84-x97.js": "assets/ReasoningLoader-Ba84-x97.js", "https://amara-makeup.aura.build/assets/lock-keyhole-D2sjrA8I.js": "assets/lock-keyhole-D2sjrA8I.js", "https://amara-makeup.aura.build/assets/BillingToggle-BHqc7C41.js": "assets/BillingToggle-BHqc7C41.js", "https://amara-makeup.aura.build/assets/CodeBlockTruncated-Rk5e9UZb.js": "assets/CodeBlockTruncated-Rk5e9UZb.js", "https://amara-makeup.aura.build/assets/canvasProjectsService-Y_wipj1I.js": "assets/canvasProjectsService-Y_wipj1I.js", "https://amara-makeup.aura.build/assets/dialog-B-sNH-TD.js": "assets/dialog-B-sNH-TD.js", "https://amara-makeup.aura.build/assets/githubUtils-hosqJxwR.js": "assets/githubUtils-hosqJxwR.js", "https://amara-makeup.aura.build/assets/index-BWXEABTF.js": "assets/index-BWXEABTF.js", "https://amara-makeup.aura.build/assets/OAuthConsent-BOwVSF6Y.js": "assets/OAuthConsent-BOwVSF6Y.js", "https://amara-makeup.aura.build/assets/calendar-D6kBdsVv.js": "assets/calendar-D6kBdsVv.js", "https://amara-makeup.aura.build/assets/ReferencePopover-DZf6ONO3.js": "assets/ReferencePopover-DZf6ONO3.js", "https://amara-makeup.aura.build/assets/monitor-smartphone-DWBxDT6-.js": "assets/monitor-smartphone-DWBxDT6-.js", "https://amara-makeup.aura.build/assets/card-DVHaFHzO.js": "assets/card-DVHaFHzO.js", "https://amara-makeup.aura.build/assets/database-Di3X7lhL.js": "assets/database-Di3X7lhL.js", "https://amara-makeup.aura.build/assets/PublishedReactProjectCard-Dlf8vo2A.js": "assets/PublishedReactProjectCard-Dlf8vo2A.js", "https://amara-makeup.aura.build/assets/CreateTemplateShelves-tPHvsX59.js": "assets/CreateTemplateShelves-tPHvsX59.js", "https://amara-makeup.aura.build/assets/RecentChatsAndIterationsSection-DF677hnj.js": "assets/RecentChatsAndIterationsSection-DF677hnj.js", "https://amara-makeup.aura.build/assets/tag-MHQYUg5k.js": "assets/tag-MHQYUg5k.js", "https://amara-makeup.aura.build/assets/panel-left-BiA5IS21.js": "assets/panel-left-BiA5IS21.js", "https://amara-makeup.aura.build/assets/authErrors-DzSYPPfX.js": "assets/authErrors-DzSYPPfX.js", "https://amara-makeup.aura.build/assets/borderGradientUtils-DPMfRoAP.js": "assets/borderGradientUtils-DPMfRoAP.js", "https://amara-makeup.aura.build/assets/codeAgentClient-D4IGuDRe.js": "assets/codeAgentClient-D4IGuDRe.js", "https://amara-makeup.aura.build/assets/Skills-FWwLksRl.js": "assets/Skills-FWwLksRl.js", "https://amara-makeup.aura.build/assets/Changelog--n-p5VHA.js": "assets/Changelog--n-p5VHA.js", "https://amara-makeup.aura.build/assets/arrow-up-right-CdCEBfMU.js": "assets/arrow-up-right-CdCEBfMU.js", "https://amara-makeup.aura.build/assets/clock-D9ZZN8Nf.js": "assets/clock-D9ZZN8Nf.js", "https://amara-makeup.aura.build/assets/shield-check-wMAe_uml.js": "assets/shield-check-wMAe_uml.js", "https://amara-makeup.aura.build/assets/earth-jdTIroz-.js": "assets/earth-jdTIroz-.js", "https://amara-makeup.aura.build/assets/flame-D5GeQZoH.js": "assets/flame-D5GeQZoH.js", "https://amara-makeup.aura.build/assets/one-light-daQKygYj.js": "assets/one-light-daQKygYj.js", "https://amara-makeup.aura.build/assets/GenerateImagePopover-BfF9F6Io.js": "assets/GenerateImagePopover-BfF9F6Io.js", "https://amara-makeup.aura.build/assets/draggable-popover-CuUNgOjl.js": "assets/draggable-popover-CuUNgOjl.js", "https://amara-makeup.aura.build/assets/mouse-pointer-DA4bvJz-.js": "assets/mouse-pointer-DA4bvJz-.js", "https://amara-makeup.aura.build/assets/users-round-gi_fFrPu.js": "assets/users-round-gi_fFrPu.js", "https://amara-makeup.aura.build/assets/shield-alert-DNtHzpBO.js": "assets/shield-alert-DNtHzpBO.js", "https://amara-makeup.aura.build/assets/supabaseFunctions-DkwAaifj.js": "assets/supabaseFunctions-DkwAaifj.js", "https://amara-makeup.aura.build/assets/Feedback-COJ9cP2E.js": "assets/Feedback-COJ9cP2E.js", "https://amara-makeup.aura.build/assets/Unsubscribe-629jZyaD.js": "assets/Unsubscribe-629jZyaD.js", "https://amara-makeup.aura.build/assets/index--nnoIeYz.js": "assets/index--nnoIeYz.js", "https://amara-makeup.aura.build/assets/gradientTextFix-DrCMmlC8.js": "assets/gradientTextFix-DrCMmlC8.js", "https://amara-makeup.aura.build/assets/minus-Defe0DZ1.js": "assets/minus-Defe0DZ1.js", "https://amara-makeup.aura.build/assets/html2canvas.esm-CBrSDip1.js": "assets/html2canvas.esm-CBrSDip1.js", "https://amara-makeup.aura.build/assets/SearchLandingPage-B4e5IY_7.js": "assets/SearchLandingPage-B4e5IY_7.js", "https://amara-makeup.aura.build/assets/ImageModal-Bhhd5lx0.js": "assets/ImageModal-Bhhd5lx0.js", "https://amara-makeup.aura.build/assets/arrow-left-DySNLhQy.js": "assets/arrow-left-DySNLhQy.js", "https://amara-makeup.aura.build/assets/SignInModal-B757XDD0.js": "assets/SignInModal-B757XDD0.js", "https://amara-makeup.aura.build/assets/ChangelogView-B8EWVoNk.js": "assets/ChangelogView-B8EWVoNk.js", "https://amara-makeup.aura.build/assets/alert-dialog-DiNFIWF_.js": "assets/alert-dialog-DiNFIWF_.js", "https://amara-makeup.aura.build/assets/formatters-DdDNw5iU.js": "assets/formatters-DdDNw5iU.js", "https://amara-makeup.aura.build/assets/index-DvJrXc6N.js": "assets/index-DvJrXc6N.js", "https://amara-makeup.aura.build/assets/tablet-DNe6oE1e.js": "assets/tablet-DNe6oE1e.js", "https://amara-makeup.aura.build/assets/Analytics-BsFZcYcB.js": "assets/Analytics-BsFZcYcB.js", "https://amara-makeup.aura.build/assets/ImportCodeModal-RHpL39dP.js": "assets/ImportCodeModal-RHpL39dP.js", "https://amara-makeup.aura.build/assets/success-DKHmNdJw.js": "assets/success-DKHmNdJw.js", "https://amara-makeup.aura.build/assets/codeModels-ouaPLdsn.js": "assets/codeModels-ouaPLdsn.js", "https://amara-makeup.aura.build/assets/googleAds-CHdBmgca.js": "assets/googleAds-CHdBmgca.js", "https://amara-makeup.aura.build/assets/EmailSignInForm-CEX52yBg.js": "assets/EmailSignInForm-CEX52yBg.js", "https://amara-makeup.aura.build/assets/rocket-Rf7H_SxH.js": "assets/rocket-Rf7H_SxH.js", "https://amara-makeup.aura.build/assets/hash-BHQ6ppT-.js": "assets/hash-BHQ6ppT-.js", "https://amara-makeup.aura.build/assets/alert-DXzGCOkW.js": "assets/alert-DXzGCOkW.js", "https://amara-makeup.aura.build/assets/file-text-CSb8RW_a.js": "assets/file-text-CSb8RW_a.js", "https://amara-makeup.aura.build/assets/user-check-Cn_LA3Yd.js": "assets/user-check-Cn_LA3Yd.js", "https://amara-makeup.aura.build/assets/codeSessionPreviewConfig-DmWr3IsV.js": "assets/codeSessionPreviewConfig-DmWr3IsV.js", "https://amara-makeup.aura.build/assets/Discord-ynTQH1VL.js": "assets/Discord-ynTQH1VL.js", "https://amara-makeup.aura.build/assets/pause-DTz6edw0.js": "assets/pause-DTz6edw0.js", "https://amara-makeup.aura.build/assets/DesignSystemEditorModal-BCdiCjTV.js": "assets/DesignSystemEditorModal-BCdiCjTV.js", "https://amara-makeup.aura.build/assets/layers-3-C21unRh6.js": "assets/layers-3-C21unRh6.js", "https://amara-makeup.aura.build/assets/CanvasReactPreviewSurface-DIFVq92A.js": "assets/CanvasReactPreviewSurface-DIFVq92A.js", "https://amara-makeup.aura.build/assets/mail-DzWpw35b.js": "assets/mail-DzWpw35b.js", "https://amara-makeup.aura.build/assets/UsageDebugPanel-BYVOpBIS.js": "assets/UsageDebugPanel-BYVOpBIS.js", "https://amara-makeup.aura.build/assets/video-B-Bqv9zd.js": "assets/video-B-Bqv9zd.js", "https://amara-makeup.aura.build/assets/arrow-left-right-DQ0wzfK9.js": "assets/arrow-left-right-DQ0wzfK9.js", "https://amara-makeup.aura.build/assets/layout-grid-CZpvnede.js": "assets/layout-grid-CZpvnede.js", "https://amara-makeup.aura.build/assets/settings-H3OHfb4a.js": "assets/settings-H3OHfb4a.js", "https://amara-makeup.aura.build/assets/Learn-Bf4X5A8L.js": "assets/Learn-Bf4X5A8L.js", "https://amara-makeup.aura.build/assets/LocalAttachmentChip-BXHYkPWl.js": "assets/LocalAttachmentChip-BXHYkPWl.js", "https://amara-makeup.aura.build/assets/CanvasReferencePreview-Dh7L1o5k.js": "assets/CanvasReferencePreview-Dh7L1o5k.js", "https://amara-makeup.aura.build/assets/BarChart-Ju6JFCMj.js": "assets/BarChart-Ju6JFCMj.js", "https://amara-makeup.aura.build/assets/message-circle-C1c7tbki.js": "assets/message-circle-C1c7tbki.js", "https://amara-makeup.aura.build/assets/Usage-46nROD7g.js": "assets/Usage-46nROD7g.js", "https://amara-makeup.aura.build/assets/download-BOs-aLsT.js": "assets/download-BOs-aLsT.js", "https://amara-makeup.aura.build/assets/userFiles-L9inHRs-.js": "assets/userFiles-L9inHRs-.js", "https://amara-makeup.aura.build/assets/trash-2-PV8gvCSW.js": "assets/trash-2-PV8gvCSW.js", "https://amara-makeup.aura.build/assets/file-question-CKMnek-L.js": "assets/file-question-CKMnek-L.js", "https://amara-makeup.aura.build/assets/CodeBrailleLoader-BkOQchQ3.js": "assets/CodeBrailleLoader-BkOQchQ3.js", "https://amara-makeup.aura.build/assets/CanvasPublicReview-DbYQrfhl.js": "assets/CanvasPublicReview-DbYQrfhl.js", "https://amara-makeup.aura.build/assets/HtmlToReactConverter-CKJccsYf.js": "assets/HtmlToReactConverter-CKJccsYf.js", "https://amara-makeup.aura.build/assets/badge-check-BzQNSiDm.js": "assets/badge-check-BzQNSiDm.js", "https://amara-makeup.aura.build/assets/pencil-D8kxM-gP.js": "assets/pencil-D8kxM-gP.js", "https://amara-makeup.aura.build/assets/git-branch-Cciw_pd7.js": "assets/git-branch-Cciw_pd7.js", "https://amara-makeup.aura.build/assets/Assets-DCMvS6Hq.js": "assets/Assets-DCMvS6Hq.js", "https://amara-makeup.aura.build/assets/codeSessionTitles-CH6XQKW8.js": "assets/codeSessionTitles-CH6XQKW8.js", "https://amara-makeup.aura.build/assets/Components-D69MZJ99.js": "assets/Components-D69MZJ99.js", "https://amara-makeup.aura.build/assets/file-BuSyZe4H.js": "assets/file-BuSyZe4H.js", "https://amara-makeup.aura.build/assets/image-off-3Xz95iXV.js": "assets/image-off-3Xz95iXV.js", "https://amara-makeup.aura.build/assets/responsiveAssetImage-CFIYash9.js": "assets/responsiveAssetImage-CFIYash9.js", "https://amara-makeup.aura.build/assets/chart-column-CywI0GcN.js": "assets/chart-column-CywI0GcN.js", "https://amara-makeup.aura.build/assets/reactSupabase-B40l5Gwo.js": "assets/reactSupabase-B40l5Gwo.js", "https://amara-makeup.aura.build/assets/users-wkd-cj0X.js": "assets/users-wkd-cj0X.js", "https://amara-makeup.aura.build/assets/CanvasWorkspace-B8-akSc6.js": "assets/CanvasWorkspace-B8-akSc6.js", "https://amara-makeup.aura.build/assets/arrow-down-Dt2d68gU.js": "assets/arrow-down-Dt2d68gU.js", "https://amara-makeup.aura.build/assets/formatDistanceToNow-C-03Spus.js": "assets/formatDistanceToNow-C-03Spus.js", "https://amara-makeup.aura.build/assets/Code-D3YOjsfX.js": "assets/Code-D3YOjsfX.js", "https://amara-makeup.aura.build/assets/stripe-Dok47t--.js": "assets/stripe-Dok47t--.js", "https://amara-makeup.aura.build/assets/layout-template-ByrOWa11.js": "assets/layout-template-ByrOWa11.js", "https://amara-makeup.aura.build/assets/clipboard-DEaEv7Vh.js": "assets/clipboard-DEaEv7Vh.js", "https://amara-makeup.aura.build/assets/SellTemplates-DvvBIEQc.js": "assets/SellTemplates-DvvBIEQc.js", "https://amara-makeup.aura.build/assets/folder-open-jDTLAqJP.js": "assets/folder-open-jDTLAqJP.js", "https://amara-makeup.aura.build/assets/Resources-DYni1jIK.js": "assets/Resources-DYni1jIK.js", "https://amara-makeup.aura.build/assets/credit-card-DD0lDUNT.js": "assets/credit-card-DD0lDUNT.js", "https://amara-makeup.aura.build/assets/user-plus-BS6QT1v-.js": "assets/user-plus-BS6QT1v-.js", "https://amara-makeup.aura.build/assets/sortable.esm-C6TeeWST.js": "assets/sortable.esm-C6TeeWST.js", "https://amara-makeup.aura.build/assets/Iterations-C2x9O92h.js": "assets/Iterations-C2x9O92h.js", "https://amara-makeup.aura.build/assets/map-pin-Byd1OpXG.js": "assets/map-pin-Byd1OpXG.js", "https://amara-makeup.aura.build/assets/lock-open-DT_mARkg.js": "assets/lock-open-DT_mARkg.js", "https://amara-makeup.aura.build/assets/Projects-HH7AHFxj.js": "assets/Projects-HH7AHFxj.js", "https://amara-makeup.aura.build/assets/TemplateAnalytics-C9bKMV8a.js": "assets/TemplateAnalytics-C9bKMV8a.js", "https://amara-makeup.aura.build/assets/ruler-gkAulDio.js": "assets/ruler-gkAulDio.js", "https://amara-makeup.aura.build/assets/PromptEnhancer-CZsgfirb.js": "assets/PromptEnhancer-CZsgfirb.js", "https://amara-makeup.aura.build/assets/authReturn-DBYKWDQV.js": "assets/authReturn-DBYKWDQV.js", "https://amara-makeup.aura.build/assets/SkillEditorModal-BkMtFB9l.js": "assets/SkillEditorModal-BkMtFB9l.js", "https://amara-makeup.aura.build/assets/NotFound-BDv7Mrr4.js": "assets/NotFound-BDv7Mrr4.js", "https://amara-makeup.aura.build/assets/gauge-BhnFmX2r.js": "assets/gauge-BhnFmX2r.js", "https://amara-makeup.aura.build/assets/reactPreviewDesignSnapshot-B9t6BsZ4.js": "assets/reactPreviewDesignSnapshot-B9t6BsZ4.js", "https://amara-makeup.aura.build/assets/SettingsModal-BjBz25K8.js": "assets/SettingsModal-BjBz25K8.js", "https://amara-makeup.aura.build/assets/canvasHyperframesComposition-DOloD27u.js": "assets/canvasHyperframesComposition-DOloD27u.js", "https://amara-makeup.aura.build/assets/SkillDetail-BAF3PNUc.js": "assets/SkillDetail-BAF3PNUc.js", "https://amara-makeup.aura.build/assets/DesignSystemPromptPopoverContent-Cl5vgOhv.js": "assets/DesignSystemPromptPopoverContent-Cl5vgOhv.js", "https://amara-makeup.aura.build/assets/sun-moon-CmZ25sXZ.js": "assets/sun-moon-CmZ25sXZ.js", "https://amara-makeup.aura.build/assets/ComponentView-mtQv3d01.js": "assets/ComponentView-mtQv3d01.js", "https://amara-makeup.aura.build/assets/list-plus-B_cy_Bd2.js": "assets/list-plus-B_cy_Bd2.js", "https://amara-makeup.aura.build/assets/user-round-DnQ8N3Ys.js": "assets/user-round-DnQ8N3Ys.js", "https://amara-makeup.aura.build/assets/file-code-2-DXAQcqpv.js": "assets/file-code-2-DXAQcqpv.js", "https://amara-makeup.aura.build/assets/crown-B2Cjq-tn.js": "assets/crown-B2Cjq-tn.js", "https://amara-makeup.aura.build/assets/ChangelogModal-B2Lad0YW.js": "assets/ChangelogModal-B2Lad0YW.js", "https://amara-makeup.aura.build/assets/message-square-heart-Cv7wjKvX.js": "assets/message-square-heart-Cv7wjKvX.js", "https://amara-makeup.aura.build/assets/send-Bp9Jh0fZ.js": "assets/send-Bp9Jh0fZ.js", "https://amara-makeup.aura.build/assets/activity-OShC-trB.js": "assets/activity-OShC-trB.js", "https://amara-makeup.aura.build/assets/vsc-dark-plus-CcVsXCy1.js": "assets/vsc-dark-plus-CcVsXCy1.js", "https://amara-makeup.aura.build/assets/PromptBuilderModal-B0sY8wuw.js": "assets/PromptBuilderModal-B0sY8wuw.js", "https://amara-makeup.aura.build/assets/Subscribe-OMgJgAHl.js": "assets/Subscribe-OMgJgAHl.js", "https://amara-makeup.aura.build/assets/maximize-Dzz-jgPN.js": "assets/maximize-Dzz-jgPN.js", "https://amara-makeup.aura.build/assets/star-D6D1hTVa.js": "assets/star-D6D1hTVa.js", "https://amara-makeup.aura.build/assets/lightbulb-BHGGAoGA.js": "assets/lightbulb-BHGGAoGA.js", "https://amara-makeup.aura.build/assets/panels-top-left-D5szf0N-.js": "assets/panels-top-left-D5szf0N-.js", "https://amara-makeup.aura.build/assets/tablet-smartphone-DbEp5upg.js": "assets/tablet-smartphone-DbEp5upg.js", "https://amara-makeup.aura.build/assets/usePurchase-6Q3h8VGC.js": "assets/usePurchase-6Q3h8VGC.js", "https://amara-makeup.aura.build/assets/search-B4cU8sg6.js": "assets/search-B4cU8sg6.js", "https://amara-makeup.aura.build/assets/form-DC5tT2s5.js": "assets/form-DC5tT2s5.js", "https://amara-makeup.aura.build/assets/videoGenerationModels-Vp0PVP65.js": "assets/videoGenerationModels-Vp0PVP65.js", "https://amara-makeup.aura.build/assets/AssetView-PI0H_owi.js": "assets/AssetView-PI0H_owi.js", "https://amara-makeup.aura.build/assets/tv-Bm0o2F6g.js": "assets/tv-Bm0o2F6g.js", "https://amara-makeup.aura.build/assets/bot-B2s3Fkvz.js": "assets/bot-B2s3Fkvz.js", "https://amara-makeup.aura.build/assets/DesignSystems-CLKADd1G.js": "assets/DesignSystems-CLKADd1G.js", "https://amara-makeup.aura.build/assets/sharedCodeCapture-BAPOxOzA.js": "assets/sharedCodeCapture-BAPOxOzA.js", "https://amara-makeup.aura.build/assets/info-CLT46omu.js": "assets/info-CLT46omu.js", "https://amara-makeup.aura.build/assets/ComponentsModal-C17wKFMu.js": "assets/ComponentsModal-C17wKFMu.js", "https://amara-makeup.aura.build/assets/turtle-BXZzs5-C.js": "assets/turtle-BXZzs5-C.js", "https://amara-makeup.aura.build/assets/CreditPurchaseModal-BIJ0B7L2.js": "assets/CreditPurchaseModal-BIJ0B7L2.js", "https://amara-makeup.aura.build/assets/boxes-Dk5293iB.js": "assets/boxes-Dk5293iB.js", "https://amara-makeup.aura.build/assets/folder-DtyOhgex.js": "assets/folder-DtyOhgex.js", "https://amara-makeup.aura.build/assets/PromptSourceSelector-C4cKgakp.js": "assets/PromptSourceSelector-C4cKgakp.js", "https://amara-makeup.aura.build/assets/circle-check-big-DOffbo4r.js": "assets/circle-check-big-DOffbo4r.js", "https://amara-makeup.aura.build/assets/zap-Enmz9M7z.js": "assets/zap-Enmz9M7z.js", "https://amara-makeup.aura.build/assets/ManageLogsModal-Bw9yPmCM.js": "assets/ManageLogsModal-Bw9yPmCM.js", "https://amara-makeup.aura.build/assets/PricingModal-CRUHOLTV.js": "assets/PricingModal-CRUHOLTV.js", "https://amara-makeup.aura.build/assets/play-DuHsczHN.js": "assets/play-DuHsczHN.js", "https://amara-makeup.aura.build/assets/TeamModal-D6VjPl9l.js": "assets/TeamModal-D6VjPl9l.js", "https://amara-makeup.aura.build/assets/CanvasPreview-CCMixCc_.js": "assets/CanvasPreview-CCMixCc_.js", "https://amara-makeup.aura.build/assets/smartphone-BVWdiv7c.js": "assets/smartphone-BVWdiv7c.js", "https://amara-makeup.aura.build/assets/DesignSystemPreview-D9bkujdK.js": "assets/DesignSystemPreview-D9bkujdK.js", "https://amara-makeup.aura.build/assets/receipt-text-BwOytlqj.js": "assets/receipt-text-BwOytlqj.js", "https://amara-makeup.aura.build/assets/volume-x-BThPu8yK.js": "assets/volume-x-BThPu8yK.js", "https://amara-makeup.aura.build/assets/codeImportService-CX4Pk9FU.js": "assets/codeImportService-CX4Pk9FU.js", "https://amara-makeup.aura.build/assets/pen-line-CWpdaMV4.js": "assets/pen-line-CWpdaMV4.js", "https://amara-makeup.aura.build/assets/rotate-ccw-jczKVSe-.js": "assets/rotate-ccw-jczKVSe-.js", "https://amara-makeup.aura.build/assets/square-DOrafs-B.js": "assets/square-DOrafs-B.js", "https://amara-makeup.aura.build/assets/TrialLimitReachedModal-gCUwIZ4J.js": "assets/TrialLimitReachedModal-gCUwIZ4J.js", "https://amara-makeup.aura.build/assets/chatImageCapture-dXNv2hcE.js": "assets/chatImageCapture-dXNv2hcE.js", "https://amara-makeup.aura.build/assets/dollar-sign-BuND4_2S.js": "assets/dollar-sign-BuND4_2S.js", "https://amara-makeup.aura.build/assets/useAdminModalAccess-BIQxKZKc.js": "assets/useAdminModalAccess-BIQxKZKc.js", "https://amara-makeup.aura.build/assets/circle-x-BM_IrL2k.js": "assets/circle-x-BM_IrL2k.js", "https://amara-makeup.aura.build/assets/NewsletterModal-COYsQWuA.js": "assets/NewsletterModal-COYsQWuA.js", "https://amara-makeup.aura.build/assets/chevron-left-BAbDOXTp.js": "assets/chevron-left-BAbDOXTp.js", "https://amara-makeup.aura.build/assets/useAdminStatus-BeUz8gGw.js": "assets/useAdminStatus-BeUz8gGw.js", "https://amara-makeup.aura.build/assets/ResetPasswordForm-PQob0GPM.js": "assets/ResetPasswordForm-PQob0GPM.js", "https://amara-makeup.aura.build/assets/filter-dyWw8HKb.js": "assets/filter-dyWw8HKb.js", "https://amara-makeup.aura.build/assets/house-DoCsumM9.js": "assets/house-DoCsumM9.js", "https://amara-makeup.aura.build/assets/globe-BDyO8ftU.js": "assets/globe-BDyO8ftU.js", "https://amara-makeup.aura.build/assets/fileTreeUtils-blx7yOSm.js": "assets/fileTreeUtils-blx7yOSm.js", "https://amara-makeup.aura.build/assets/square-user-round-DB_2VIvN.js": "assets/square-user-round-DB_2VIvN.js", "https://amara-makeup.aura.build/assets/AuraComparison-CxROZ9AI.js": "assets/AuraComparison-CxROZ9AI.js", "https://amara-makeup.aura.build/assets/arrow-up-down-KUdGOeIH.js": "assets/arrow-up-down-KUdGOeIH.js", "https://amara-makeup.aura.build/assets/code-xml-Coo2pa38.js": "assets/code-xml-Coo2pa38.js", "https://amara-makeup.aura.build/assets/Editor-DGznqhhH.js": "assets/Editor-DGznqhhH.js", "https://amara-makeup.aura.build/assets/changelog-Cumpq6rH.js": "assets/changelog-Cumpq6rH.js", "https://amara-makeup.aura.build/assets/message-square-text-2kJka0Sl.js": "assets/message-square-text-2kJka0Sl.js", "https://amara-makeup.aura.build/assets/canvasWorkspaceService-CuQ8dGCG.js": "assets/canvasWorkspaceService-CuQ8dGCG.js", "https://amara-makeup.aura.build/assets/panel-left-close-DgBYGXv9.js": "assets/panel-left-close-DgBYGXv9.js", "https://amara-makeup.aura.build/assets/type-C_CBgFT2.js": "assets/type-C_CBgFT2.js", "https://amara-makeup.aura.build/assets/layers-2-CpAkokRc.js": "assets/layers-2-CpAkokRc.js", "https://amara-makeup.aura.build/assets/CodeBlockDisplay-wYzVBrvu.js": "assets/CodeBlockDisplay-wYzVBrvu.js", "https://amara-makeup.aura.build/assets/chatImageUtils-BMCm6GzG.js": "assets/chatImageUtils-BMCm6GzG.js", "https://amara-makeup.aura.build/assets/Terms-BwHXMq8k.js": "assets/Terms-BwHXMq8k.js", "https://amara-makeup.aura.build/assets/ComponentService-DKHB_eHQ.js": "assets/ComponentService-DKHB_eHQ.js", "https://amara-makeup.aura.build/assets/UsersModal-DtALowkS.js": "assets/UsersModal-DtALowkS.js", "https://amara-makeup.aura.build/assets/DomainsModal-CYHSkV7r.js": "assets/DomainsModal-CYHSkV7r.js", "https://amara-makeup.aura.build/assets/codeStorage-BelcX8lV.js": "assets/codeStorage-BelcX8lV.js", "https://amara-makeup.aura.build/assets/SignIn-C7P4solK.js": "assets/SignIn-C7P4solK.js", "https://amara-makeup.aura.build/assets/Privacy-DtkIn2Vg.js": "assets/Privacy-DtkIn2Vg.js", "https://amara-makeup.aura.build/assets/PricingPage-Dranvxbz.js": "assets/PricingPage-Dranvxbz.js", "https://amara-makeup.aura.build/assets/AccessDenied-DkZjtig5.js": "assets/AccessDenied-DkZjtig5.js", "https://amara-makeup.aura.build/assets/User-CJegPttl.js": "assets/User-CJegPttl.js", "https://amara-makeup.aura.build/assets/minimize-CnYzMiUP.js": "assets/minimize-CnYzMiUP.js", "https://amara-makeup.aura.build/assets/colorUtils-JuwdntXj.js": "assets/colorUtils-JuwdntXj.js", "https://amara-makeup.aura.build/assets/TemplateDetail-CIRRB62D.js": "assets/TemplateDetail-CIRRB62D.js", "https://amara-makeup.aura.build/assets/ImagePicker-Bc91d0T7.js": "assets/ImagePicker-Bc91d0T7.js", "https://amara-makeup.aura.build/assets/InvitePopover-CsqZYq9d.js": "assets/InvitePopover-CsqZYq9d.js", "https://amara-makeup.aura.build/assets/wand-sparkles-B8BCHVhp.js": "assets/wand-sparkles-B8BCHVhp.js", "https://amara-makeup.aura.build/assets/plus-Cp2zQ9v7.js": "assets/plus-Cp2zQ9v7.js", "https://amara-makeup.aura.build/assets/search-check-DuRtb8zd.js": "assets/search-check-DuRtb8zd.js", "https://amara-makeup.aura.build/assets/ResetPassword-D2ogWtA7.js": "assets/ResetPassword-D2ogWtA7.js", "https://amara-makeup.aura.build/assets/DesignSystemDetail-D_7eDrw7.js": "assets/DesignSystemDetail-D_7eDrw7.js", "https://amara-makeup.aura.build/assets/scroll-area-DXHsIL5y.js": "assets/scroll-area-DXHsIL5y.js", "https://amara-makeup.aura.build/assets/MarkdownContent-D-OI9Z3W.js": "assets/MarkdownContent-D-OI9Z3W.js", "https://amara-makeup.aura.build/assets/mouse-pointer-2-DgFBNrDZ.js": "assets/mouse-pointer-2-DgFBNrDZ.js", "https://amara-makeup.aura.build/assets/textarea-DSZMsOvq.js": "assets/textarea-DSZMsOvq.js", "https://amara-makeup.aura.build/assets/codeSessionService-Mj8AzGun.js": "assets/codeSessionService-Mj8AzGun.js", "https://amara-makeup.aura.build/assets/CMSPage-DiM1xCdW.js": "assets/CMSPage-DiM1xCdW.js", "https://amara-makeup.aura.build/assets/user-CaCKeUvG.js": "assets/user-CaCKeUvG.js", "https://amara-makeup.aura.build/assets/en-US-BukEqXxE.js": "assets/en-US-BukEqXxE.js", "https://amara-makeup.aura.build/assets/heart-Hta92K3P.js": "assets/heart-Hta92K3P.js", "https://amara-makeup.aura.build/assets/Affiliates-BKQv6Zf2.js": "assets/Affiliates-BKQv6Zf2.js", "https://amara-makeup.aura.build/assets/upload-CQLI2GDS.js": "assets/upload-CQLI2GDS.js", "https://amara-makeup.aura.build/assets/UserProfileMenu-C7Py3zWc.js": "assets/UserProfileMenu-C7Py3zWc.js", "https://amara-makeup.aura.build/assets/Browse-x_Wec379.js": "assets/Browse-x_Wec379.js", "https://amara-makeup.aura.build/assets/UpscalePopover-CuTbCHBl.js": "assets/UpscalePopover-CuTbCHBl.js", "https://amara-makeup.aura.build/assets/SelectionImages-vT9Wv760.js": "assets/SelectionImages-vT9Wv760.js", "https://amara-makeup.aura.build/assets/book-open-D4d2sQ7W.js": "assets/book-open-D4d2sQ7W.js", "https://amara-makeup.aura.build/assets/useQuery-CiGxmwhf.js": "assets/useQuery-CiGxmwhf.js", "https://amara-makeup.aura.build/assets/designSystemAttachments-CBkU9aao.js": "assets/designSystemAttachments-CBkU9aao.js", "https://amara-makeup.aura.build/assets/trending-up-DkazJ3Vu.js": "assets/trending-up-DkazJ3Vu.js", "https://amara-makeup.aura.build/assets/Return-BRFmDwci.js": "assets/Return-BRFmDwci.js", "https://amara-makeup.aura.build/assets/AuthCallback-HZka81Kg.js": "assets/AuthCallback-HZka81Kg.js", "https://amara-makeup.aura.build/assets/AssetsModal-D6iK3RJm.js": "assets/AssetsModal-D6iK3RJm.js", "https://amara-makeup.aura.build/assets/PublishedReactProjectPreviewPopover-CQiJG_Wv.js": "assets/PublishedReactProjectPreviewPopover-CQiJG_Wv.js", "https://amara-makeup.aura.build/assets/SharedCodeCardAdminActions-JgI2BgWb.js": "assets/SharedCodeCardAdminActions-JgI2BgWb.js", "https://amara-makeup.aura.build/assets/AdminPreviewPopoverFooter-D_FLd9JF.js": "assets/AdminPreviewPopoverFooter-D_FLd9JF.js", "https://amara-makeup.aura.build/assets/SharedCodePreviewPopover-Ijk7XaNV.js": "assets/SharedCodePreviewPopover-Ijk7XaNV.js", "https://amara-makeup.aura.build/assets/jszip.min-CpY5nZLn.js": "assets/jszip.min-CpY5nZLn.js", "https://amara-makeup.aura.build/assets/productionTransform-B69cSEas.js": "assets/productionTransform-B69cSEas.js", "https://amara-makeup.aura.build/assets/canvasLibrarySaveService-1W2Xczyc.js": "assets/canvasLibrarySaveService-1W2Xczyc.js", "https://amara-makeup.aura.build/assets/canvasHtmlFileImport-BeXZOShP.js": "assets/canvasHtmlFileImport-BeXZOShP.js", "https://amara-makeup.aura.build/assets/canvasProjectTitles-BIZoUfIg.js": "assets/canvasProjectTitles-BIZoUfIg.js", "https://amara-makeup.aura.build/assets/canvasReactGeneration-BCJD2RpT.js": "assets/canvasReactGeneration-BCJD2RpT.js", "https://amara-makeup.aura.build/assets/index-CmRnOhh2.js": "assets/index-CmRnOhh2.js", "https://amara-makeup.aura.build/assets/UsageStats-D7qUY41l.js": "assets/UsageStats-D7qUY41l.js", "https://amara-makeup.aura.build/assets/ProductFeedbackWidget-DJeaTsQz.js": "assets/ProductFeedbackWidget-DJeaTsQz.js", "https://amara-makeup.aura.build/assets/productFeedbackCapture-D8nJfYaH.js": "assets/productFeedbackCapture-D8nJfYaH.js"};
// Pre-populate path+query keys: when opened via file://, JS
// resolves '/foo.js' against file://… so we lose the original
// origin. Indexing by pathname+search lets the lookup succeed.
var _add = {};
for (var _k in ASSET_MAP) {
  try { var _u = new URL(_k); _add[_u.pathname + _u.search] = ASSET_MAP[_k]; }
  catch(e){}
}
for (var _k in _add) if (!ASSET_MAP[_k]) ASSET_MAP[_k] = _add[_k];
function resolveLocal(u){
  if (!u || typeof u !== 'string') return null;
  if (u.indexOf('data:') === 0 || u.indexOf('blob:') === 0) return null;
  if (ASSET_MAP[u]) return ASSET_MAP[u];
  try {
    var url = new URL(u, location.href);
    var pq = url.pathname + url.search;
    if (ASSET_MAP[pq]) return ASSET_MAP[pq];
    // The snapshot may be opened from a subdirectory, while
    // ASSET_MAP paths are origin-rooted. Retry with the
    // document's own directory prefix stripped off.
    var dir = location.pathname.replace(/[^/]*$/, '');
    if (dir.length > 1 && pq.indexOf(dir) === 0) {
      var rel = pq.slice(dir.length - 1);
      if (ASSET_MAP[rel]) return ASSET_MAP[rel];
    }
    // Next.js image optimization wrapper — peel the inner CDN URL
    if (/_next\/image$/.test(url.pathname)) {
      var t = url.searchParams.get('url');
      if (t) {
        var dec = decodeURIComponent(t);
        if (ASSET_MAP[dec]) return ASSET_MAP[dec];
        var bare = dec.split('?')[0];
        for (var k in ASSET_MAP) {
          if (k.split('?')[0] === bare) return ASSET_MAP[k];
        }
      }
    }
  } catch(e){}
  return null;
}
function rewriteSrcset(s){
  if (!s || typeof s !== 'string') return s;
  return s.split(',').map(function(it){
    var p = it.trim().split(/\s+/);
    var loc = resolveLocal(p[0]);
    if (loc) p[0] = loc;
    return p.join(' ');
  }).join(', ');
}
// Patch property setters: el.src = '...' / el.href = '...'
// IMPORTANT: skip rewrite when the element has crossOrigin set.
// WebGL textures (UnicornStudio, Three.js, etc.) are loaded via
//   img.crossOrigin = 'anonymous'; img.src = 'https://cdn/...'
// and consumed via gl.texImage2D. file:// resources have no CORS
// headers, so rewriting to local makes WebGL reject the texture
// (Access blocked by CORS policy → black/missing 3D scene).
// Better to keep the original URL: works online, fails offline,
// matches non-patched behaviour.
function patchSetter(klass, prop, transform){
  if (!klass || !klass.prototype) return;
  var desc = Object.getOwnPropertyDescriptor(klass.prototype, prop);
  if (!desc || !desc.set) return;
  Object.defineProperty(klass.prototype, prop, {
    configurable: true,
    get: desc.get,
    set: function(v){
      try {
        if (transform === 'srcset') {
          v = rewriteSrcset(v);
        } else {
          // Captured runtime resource (UnicornStudio texture,
          // etc.) → serve as a data: URI. data: never CORS-
          // taints a WebGL canvas, unlike a file:// texture,
          // so gl.texImage2D still accepts it offline.
          var du = window.__offlineDataUri && window.__offlineDataUri(v);
          if (du) { v = du; }
          else if (!this.crossOrigin) {
            var loc = resolveLocal(v); if (loc) v = loc;
          }
        }
      } catch(e){}
      desc.set.call(this, v);
    }
  });
}
patchSetter(window.HTMLScriptElement, 'src');
patchSetter(window.HTMLLinkElement, 'href');
patchSetter(window.HTMLImageElement, 'src');
patchSetter(window.HTMLImageElement, 'srcset', 'srcset');
patchSetter(window.HTMLSourceElement, 'src');
patchSetter(window.HTMLSourceElement, 'srcset', 'srcset');
patchSetter(window.HTMLMediaElement, 'src');
patchSetter(window.HTMLIFrameElement, 'src');
// Patch setAttribute too — some libs use it instead of property set
var _setAttr = Element.prototype.setAttribute;
Element.prototype.setAttribute = function(name, value){
  try {
    if (typeof value === 'string') {
      if (name === 'src' || name === 'href') {
        var du = window.__offlineDataUri && window.__offlineDataUri(value);
        if (du) { value = du; }
        else if (!this.crossOrigin) {
          var loc = resolveLocal(value); if (loc) value = loc;
        }
      } else if (name === 'srcset' && !this.crossOrigin) {
        value = rewriteSrcset(value);
      }
    }
  } catch(e){}
  return _setAttr.call(this, name, value);
};
// Expose for the late-init script in body
window.__resolveLocal = resolveLocal;
window.__rewriteSrcset = rewriteSrcset;
})();
(function () {
  if (window.__AURA_SUPABASE_FIREWALL__) return;
  window.__AURA_SUPABASE_FIREWALL__ = true;

  var SUPABASE_HOST = "hoirqrkdgbmvpwutwuwj.supabase.co";
  var BLOCKED_KEY_PATTERNS = [
    /^sb-[a-z0-9-]+-auth-token$/i,
    /^supabase\.auth\.token$/i
  ];

  function isBlockedStorageKey(key) {
    if (typeof key !== "string") return false;
    for (var i = 0; i < BLOCKED_KEY_PATTERNS.length; i++) {
      if (BLOCKED_KEY_PATTERNS[i].test(key)) return true;
    }
    return false;
  }

  function toAbsoluteUrl(input) {
    try {
      return new URL(input, window.location.href);
    } catch {
      return null;
    }
  }

  function isSupabaseDestination(input) {
    var parsed = toAbsoluteUrl(input);
    if (!parsed) return false;
    if (SUPABASE_HOST && parsed.host === SUPABASE_HOST) return true;
    return parsed.host.endsWith(".supabase.co");
  }

  function pathLooksSensitive(input) {
    var parsed = toAbsoluteUrl(input);
    if (!parsed) return false;
    return /^\/(auth|rest|functions)\/v1\//.test(parsed.pathname || "");
  }

  function headersContainAuth(headersLike) {
    if (!headersLike) return false;

    try {
      if (typeof Headers !== "undefined" && headersLike instanceof Headers) {
        return !!(headersLike.get("authorization") || headersLike.get("apikey"));
      }
    } catch {}

    if (Array.isArray(headersLike)) {
      for (var i = 0; i < headersLike.length; i++) {
        var pair = headersLike[i] || [];
        var name = String(pair[0] || "").toLowerCase();
        if (name === "authorization" || name === "apikey") return true;
      }
      return false;
    }

    if (typeof headersLike === "object") {
      var keys = Object.keys(headersLike);
      for (var j = 0; j < keys.length; j++) {
        var k = keys[j].toLowerCase();
        if (k === "authorization" || k === "apikey") return true;
      }
    }
    return false;
  }

  function requestLooksSensitive(input, init, extraHeaders) {
    var url = "";
    try {
      if (typeof input === "string") {
        url = input;
      } else if (input && typeof input.url === "string") {
        url = input.url;
      }
    } catch {}

    var headers =
      (init && init.headers) ||
      (input && input.headers) ||
      extraHeaders ||
      null;
    var hasAuthHeaders = headersContainAuth(headers);
    if (hasAuthHeaders) return true;

    if (!url) return false;
    if (isSupabaseDestination(url) && pathLooksSensitive(url)) return true;
    return false;
  }

  function patchStorage(storage, storageName) {
    if (!storage) return;
    var proto = Object.getPrototypeOf(storage);
    if (!proto || proto.__auraSupabaseFirewallPatched) return;

    var rawGetItem = proto.getItem;
    var rawSetItem = proto.setItem;
    var rawRemoveItem = proto.removeItem;
    var rawClear = proto.clear;
    var rawKey = proto.key;
    var rawLengthDescriptor = Object.getOwnPropertyDescriptor(proto, "length");
    var rawLengthGet = rawLengthDescriptor && rawLengthDescriptor.get;

    function getRawLength(instance) {
      try {
        if (rawLengthGet) return Number(rawLengthGet.call(instance) || 0);
      } catch {}
      try {
        return Number(instance.length || 0);
      } catch {}
      return 0;
    }

    function getVisibleKeys(instance) {
      var visible = [];
      var total = getRawLength(instance);
      for (var i = 0; i < total; i++) {
        var currentKey = rawKey.call(instance, i);
        if (currentKey && !isBlockedStorageKey(currentKey)) {
          visible.push(currentKey);
        }
      }
      return visible;
    }

    function maskBlockedKeyProperty(instance, keyName) {
      if (!keyName || !isBlockedStorageKey(keyName)) return;
      try {
        Object.defineProperty(instance, keyName, {
          configurable: true,
          enumerable: false,
          get: function () {
            return null;
          },
          set: function () {
            return true;
          }
        });
      } catch {}
    }

    function syncBlockedKeyProperties(instance) {
      var total = getRawLength(instance);
      for (var i = 0; i < total; i++) {
        var k = rawKey.call(instance, i);
        if (k) maskBlockedKeyProperty(instance, k);
      }
    }

    proto.getItem = function (key) {
      syncBlockedKeyProperties(this);
      if (isBlockedStorageKey(String(key))) return null;
      return rawGetItem.call(this, key);
    };

    proto.setItem = function (key, value) {
      if (isBlockedStorageKey(String(key))) return;
      return rawSetItem.call(this, key, value);
    };

    proto.removeItem = function (key) {
      if (isBlockedStorageKey(String(key))) return;
      return rawRemoveItem.call(this, key);
    };

    proto.clear = function () {
      if (typeof rawClear !== "function") return;

      // Preserve blocked keys across clear() to prevent auth token/session wipe.
      var preservedBlockedEntries = [];
      var total = getRawLength(this);
      for (var i = 0; i < total; i++) {
        var blockedKey = rawKey.call(this, i);
        if (blockedKey && isBlockedStorageKey(blockedKey)) {
          preservedBlockedEntries.push([
            blockedKey,
            rawGetItem.call(this, blockedKey),
          ]);
        }
      }

      rawClear.call(this);

      for (var j = 0; j < preservedBlockedEntries.length; j++) {
        var entry = preservedBlockedEntries[j];
        var key = entry[0];
        var value = entry[1];
        if (typeof key === "string" && typeof value === "string") {
          rawSetItem.call(this, key, value);
        }
      }

      syncBlockedKeyProperties(this);
    };

    proto.key = function (index) {
      syncBlockedKeyProperties(this);
      var visible = getVisibleKeys(this);
      return visible[index] || null;
    };

    try {
      Object.defineProperty(proto, "length", {
        configurable: true,
        enumerable: false,
        get: function () {
          syncBlockedKeyProperties(this);
          return getVisibleKeys(this).length;
        }
      });
    } catch {}

    var proxyStorage = null;
    try {
      proxyStorage = new Proxy(storage, {
        get: function (target, prop) {
          if (typeof prop === "string" && isBlockedStorageKey(prop)) return null;
          if (prop === "length") return getVisibleKeys(target).length;
          if (prop === "key") {
            return function (index) {
              var visible = getVisibleKeys(target);
              return visible[index] || null;
            };
          }
          if (prop === "clear") {
            return function () {
              if (typeof rawClear !== "function") return;

              var preservedBlockedEntries = [];
              var total = getRawLength(target);
              for (var i = 0; i < total; i++) {
                var blockedKey = rawKey.call(target, i);
                if (blockedKey && isBlockedStorageKey(blockedKey)) {
                  preservedBlockedEntries.push([
                    blockedKey,
                    rawGetItem.call(target, blockedKey),
                  ]);
                }
              }

              rawClear.call(target);

              for (var j = 0; j < preservedBlockedEntries.length; j++) {
                var entry = preservedBlockedEntries[j];
                var key = entry[0];
                var value = entry[1];
                if (typeof key === "string" && typeof value === "string") {
                  rawSetItem.call(target, key, value);
                }
              }

              syncBlockedKeyProperties(target);
            };
          }

          var value = target[prop];
          if (typeof value === "function") return value.bind(target);
          return value;
        },
        set: function (target, prop, value) {
          if (typeof prop === "string" && isBlockedStorageKey(prop)) return true;
          target[prop] = value;
          return true;
        },
        has: function (target, prop) {
          if (typeof prop === "string" && isBlockedStorageKey(prop)) return false;
          return prop in target;
        },
        deleteProperty: function (target, prop) {
          if (typeof prop === "string" && isBlockedStorageKey(prop)) return true;
          try {
            delete target[prop];
          } catch {}
          return true;
        },
        ownKeys: function (target) {
          return getVisibleKeys(target);
        },
        getOwnPropertyDescriptor: function (target, prop) {
          if (typeof prop === "string" && isBlockedStorageKey(prop)) {
            return undefined;
          }
          if (prop === "length") {
            return {
              configurable: true,
              enumerable: false,
              value: getVisibleKeys(target).length,
              writable: false
            };
          }
          return Object.getOwnPropertyDescriptor(target, prop);
        }
      });
    } catch {}

    try {
      if (proxyStorage) {
        Object.defineProperty(window, storageName, {
          configurable: true,
          enumerable: true,
          get: function () {
            return proxyStorage;
          }
        });
      }
    } catch {}

    syncBlockedKeyProperties(storage);
    proto.__auraSupabaseFirewallPatched = true;
  }

  function patchCookieAccess() {
    try {
      var cookieDescriptor = Object.getOwnPropertyDescriptor(Document.prototype, "cookie");
      if (!cookieDescriptor || !cookieDescriptor.configurable) return;

      Object.defineProperty(document, "cookie", {
        configurable: true,
        enumerable: false,
        get: function () {
          return "";
        },
        set: function () {
          return true;
        }
      });
    } catch {}
  }

  function patchFetch() {
    if (typeof window.fetch !== "function") return;
    var rawFetch = window.fetch.bind(window);
    window.fetch = function (input, init) {
      if (requestLooksSensitive(input, init, null)) {
        return Promise.reject(new Error("Blocked by Aura security policy"));
      }
      return rawFetch(input, init);
    };
  }

  function patchXHR() {
    if (typeof XMLHttpRequest === "undefined") return;
    var rawOpen = XMLHttpRequest.prototype.open;
    var rawSetHeader = XMLHttpRequest.prototype.setRequestHeader;
    var rawSend = XMLHttpRequest.prototype.send;

    XMLHttpRequest.prototype.open = function (method, url) {
      this.__auraRequestUrl = String(url || "");
      this.__auraHeaders = {};
      return rawOpen.apply(this, arguments);
    };

    XMLHttpRequest.prototype.setRequestHeader = function (name, value) {
      if (!this.__auraHeaders) this.__auraHeaders = {};
      this.__auraHeaders[String(name || "").toLowerCase()] = String(value || "");
      return rawSetHeader.apply(this, arguments);
    };

    XMLHttpRequest.prototype.send = function () {
      if (requestLooksSensitive(this.__auraRequestUrl || "", null, this.__auraHeaders || null)) {
        throw new Error("Blocked by Aura security policy");
      }
      return rawSend.apply(this, arguments);
    };
  }

  function patchBeacon() {
    if (typeof navigator.sendBeacon !== "function") return;
    var rawBeacon = navigator.sendBeacon.bind(navigator);
    navigator.sendBeacon = function (url, data) {
      if (requestLooksSensitive(url, null, null)) return false;
      return rawBeacon(url, data);
    };
  }

  function patchWebSocket() {
    if (typeof WebSocket === "undefined") return;
    var RawWebSocket = WebSocket;
    window.WebSocket = function (url, protocols) {
      if (requestLooksSensitive(String(url || ""), null, null)) {
        throw new Error("Blocked by Aura security policy");
      }
      return new RawWebSocket(url, protocols);
    };
    window.WebSocket.prototype = RawWebSocket.prototype;
  }

  patchStorage(window.localStorage, "localStorage");
  patchStorage(window.sessionStorage, "sessionStorage");
  patchCookieAccess();
  patchFetch();
  patchXHR();
  patchBeacon();
  patchWebSocket();
})();

          (()=>{
            const archive=document.getElementById('archive');
            if(!archive||!archive.classList.contains('archive--gesture'))return;
            const grid=archive.querySelector('.archive__grid');
            const cards=[...archive.querySelectorAll('.archive-item')];
            if(!grid||!cards.length)return;
            const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
            let active=null;
            const arrange=()=>{
              const mobile=innerWidth<768;
              const center=(cards.length-1)/2;
              const spread=mobile?43:88;
              cards.forEach((card,index)=>{
                const delta=index-center;
                const distance=Math.abs(delta);
                const target={
                  x:delta*spread,
                  y:distance*(mobile?14:18),
                  rotation:delta*(mobile?4.2:5.5),
                  scale:Math.max(mobile?.72:.76,1-distance*(mobile?.055:.045)),
                  z:Math.round(60-distance*7)
                };
                card._archiveTarget=target;
                card.style.setProperty('--archive-x',target.x+'px');
                card.style.setProperty('--archive-y',target.y+'px');
                card.style.setProperty('--archive-rotation',target.rotation+'deg');
                card.style.setProperty('--archive-scale',String(target.scale));
                card.style.setProperty('--archive-delay',(reduced?0:.08+distance*.065)+'s');
                card.style.zIndex=String(target.z);
              });
            };
            arrange();
            addEventListener('resize',arrange,{passive:true});
            if(reduced){grid.classList.add('is-arranged')}else{
              const observer=new IntersectionObserver(entries=>{
                if(entries.some(entry=>entry.isIntersecting)){
                  grid.classList.add('is-arranged');
                  observer.disconnect();
                }
              },{threshold:.18});
              observer.observe(grid);
            }
            const release=card=>{
              if(!card||!card._archiveTarget)return;
              const target=card._archiveTarget;
              card.classList.remove('is-dragging');
              card.style.removeProperty('transition');
              card.style.setProperty('--archive-x',target.x+'px');
              card.style.setProperty('--archive-y',target.y+'px');
              card.style.setProperty('--archive-rotation',target.rotation+'deg');
              card.style.setProperty('--archive-scale',String(target.scale));
              card.style.zIndex=String(target.z);
              active=null;
            };
            cards.forEach(card=>{
              card.addEventListener('pointerdown',event=>{
                if(!grid.classList.contains('is-arranged'))return;
                active={card,startX:event.clientX,startY:event.clientY,baseX:card._archiveTarget.x,baseY:card._archiveTarget.y};
                card.classList.add('is-dragging');
                card.style.zIndex='200';
                card.style.setProperty('--archive-scale',String(card._archiveTarget.scale+.05));
                card.style.setProperty('--archive-rotation','0deg');
                card.setPointerCapture(event.pointerId);
              });
              card.addEventListener('pointermove',event=>{
                if(!active||active.card!==card)return;
                card.style.setProperty('--archive-x',active.baseX+event.clientX-active.startX+'px');
                card.style.setProperty('--archive-y',active.baseY+event.clientY-active.startY+'px');
              });
              card.addEventListener('pointerup',()=>release(card));
              card.addEventListener('pointercancel',()=>release(card));
              card.addEventListener('lostpointercapture',()=>{if(active&&active.card===card)release(card)});
            });
          })();
        

          (() => {
        document.documentElement.classList.add("js-ready");

        const carousel = document.querySelector(".hero-carousel");
        const cards = [...document.querySelectorAll(".hero-carousel__card")];
        let offset = 0;
        let previous = performance.now();
        let dragging = false;
        let pointerX = 0;
        let velocity = 0;
        const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

        const drawCarousel = (now) => {
          if (carousel) {
            const dt = Math.min(40, now - previous);
            previous = now;
            const width = carousel.clientWidth;
            const compact = width < 760;
            const spacing = compact ? 150 : Math.max(190, width / 5.25);
            const total = spacing * cards.length;
            if (!dragging && !reduced) {
              offset -= dt * 0.045 + velocity;
              velocity *= .94;
            }
            cards.forEach((card, index) => {
              let x = (index * spacing + offset) % total;
              if (x < 0) x += total;
              if (x > width + spacing) x -= total;
              const normalized = (x - width / 2) / (width / 2);
              const edge = Math.min(1.35, Math.abs(normalized));
              const scale = (compact ? .78 : .64) + Math.pow(edge, 1.35) * (compact ? .22 : .52);
              card.style.transform = "translate3d(" + (x - (compact ? 100 : 135)) + "px, " + (edge * (compact ? 18 : 42)) + "px, " + (80 - edge * 90) + "px) rotateY(" + (normalized * -9) + "deg) scale(" + scale + ")";
              card.style.zIndex = String(Math.round(30 - edge * 10));
              card.style.filter = "brightness(" + (.58 + (1 - Math.min(1, edge)) * .38) + ")";
              card.style.opacity = String(Math.max(.18, 1 - Math.max(0, edge - .95) * 1.8));
            });
          }
          requestAnimationFrame(drawCarousel);
        };
        requestAnimationFrame(drawCarousel);

        carousel?.addEventListener("pointerdown", (event) => {
          dragging = true;
          pointerX = event.clientX;
          velocity = 0;
          carousel.setPointerCapture(event.pointerId);
        });
        carousel?.addEventListener("pointermove", (event) => {
          if (!dragging) return;
          const delta = event.clientX - pointerX;
          pointerX = event.clientX;
          velocity = -delta * .08;
          offset += delta;
        });
        ["pointerup", "pointercancel"].forEach((type) => carousel?.addEventListener(type, () => { dragging = false; }));

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        }, { rootMargin: "0px 0px -10%", threshold: .08 });
        document.querySelectorAll("[data-reveal]").forEach((item) => observer.observe(item));

        const serviceImages = [...document.querySelectorAll(".services__visual img")];
        document.querySelectorAll(".service-item > button").forEach((button, index) => {
          button.addEventListener("click", () => {
            document.querySelectorAll(".service-item").forEach((item, itemIndex) => {
              const open = itemIndex === index;
              item.classList.toggle("is-open", open);
              item.querySelector("button").setAttribute("aria-expanded", String(open));
              item.querySelector("button span:last-child").textContent = open ? "−" : "+";
            });
            serviceImages.forEach((image, imageIndex) => image.classList.toggle("is-active", imageIndex === index));
          });
        });

        document.querySelectorAll(".faq-item > button").forEach((button) => {
          button.addEventListener("click", () => {
            const item = button.closest(".faq-item");
            const open = !item.classList.contains("is-open");
            document.querySelectorAll(".faq-item").forEach((row) => {
              row.classList.remove("is-open");
              row.querySelector("button").setAttribute("aria-expanded", "false");
              row.querySelector("button span:last-child").textContent = "+";
            });
            if (open) {
              item.classList.add("is-open");
              button.setAttribute("aria-expanded", "true");
              button.querySelector("span:last-child").textContent = "−";
            }
          });
        });

        const meter = document.querySelector(".scroll-meter span");
        let ticking = false;
        const updateScroll = () => {
          const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
          if (meter) meter.style.transform = "scaleX(" + Math.min(1, Math.max(0, scrollY / max)) + ")";
          document.querySelectorAll("[data-parallax]").forEach((element) => {
            const rate = Number(element.dataset.parallax || 0);
            const rect = element.getBoundingClientRect();
            element.style.setProperty("--parallax", ((rect.top + rect.height / 2 - innerHeight / 2) * rate) + "px");
          });
          ticking = false;
        };
        addEventListener("scroll", () => {
          if (!ticking) {
            ticking = true;
            requestAnimationFrame(updateScroll);
          }
        }, { passive: true });
        addEventListener("resize", updateScroll);
        updateScroll();
      })();
    

      (function () {
        function playVideo(video) {
          var promise = video.play();
          if (promise && typeof promise.catch === "function") {
            promise.catch(function () {});
          }
        }

        function setupVideo(video) {
          if (video.__auraVideoReady === true) return;
          video.__auraVideoReady = true;
          video.removeAttribute("data-aura-video-ready");
          video.removeAttribute("data-aura-video-played");
          video.muted = true;
          video.playsInline = true;

          var preset = video.dataset.auraVideoPreset || "loop-in-view";
          if (preset === "hover") {
            video.addEventListener("mouseenter", function () {
              playVideo(video);
            });
            video.addEventListener("mouseleave", function () {
              video.pause();
              video.currentTime = 0;
            });
            return;
          }

          if (!("IntersectionObserver" in window)) {
            playVideo(video);
            return;
          }

          var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                if (preset === "play-once" && video.__auraVideoPlayed === true) {
                  return;
                }
                playVideo(video);
              } else {
                video.pause();
              }
            });
          }, { threshold: 0.35 });

          if (preset === "play-once") {
            video.addEventListener("ended", function () {
              video.__auraVideoPlayed = true;
            }, { once: true });
          }

          observer.observe(video);
        }

        function setupVideos() {
          document
            .querySelectorAll("video[data-aura-video-preset]")
            .forEach(setupVideo);
        }

        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", setupVideos);
        } else {
          setupVideos();
        }
      })();
    
!function(){var f=["https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg","https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg","https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg","https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp","https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"],h=new Set;function g(s){for(var x=0,i=0;i<s.length;i++)x=(x<<5)-x+s.charCodeAt(i)|0;return f[Math.abs(x)%f.length]}function r(t){var s=t.src;if(s&&!h.has(s)){h.add(s);t.src=g(s)}}window.addEventListener("error",function(e){var t=e.target;if(t&&t.tagName==="IMG")r(t)},!0);function c(){document.querySelectorAll("img").forEach(function(i){if(i.complete&&!i.naturalWidth&&i.src)r(i)})}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",c);else c()}()
(function(){
var IS_CSR = false;
var resolveLocal = window.__resolveLocal || function(){return null;};
var rewriteSrcset = window.__rewriteSrcset || function(s){return s;};
function fixImg(el){
  if (!el || el.tagName !== 'IMG') return;
  var src = el.getAttribute('src');
  var loc = resolveLocal(src);
  if (loc && src !== loc) el.setAttribute('src', loc);
  var ss = el.getAttribute('srcset');
  if (ss) {
    var nss = rewriteSrcset(ss);
    if (nss !== ss) el.setAttribute('srcset', nss);
  }
}
function fixAll(){ document.querySelectorAll('img').forEach(fixImg); }
function hasSlideOffset(t){
  // True if a transform indicates a 'parked off-screen' starting
  // state: translation in px (>= 30) or % (>= 5), or a matrix
  // with non-zero translation. Returns false for crossfade-only
  // companions like scale(0.9) or pure centering translateX(-50%).
  if (!t || t === 'none') return false;
  // matrix(a,b,c,d,tx,ty) — parse tx/ty; matrix3d & friends → assume slide.
  var matMatch = t.match(/matrix\(([^)]+)\)/);
  if (matMatch) {
    var parts = matMatch[1].split(',').map(function(x){return parseFloat(x.trim());});
    if (parts.length === 6) {
      if (Math.abs(parts[4]) >= 30 || Math.abs(parts[5]) >= 30) return true;
    } else { return true; }
  }
  if (/matrix3d/i.test(t)) return true;
  var px = t.match(/(-?\d+\.?\d*)px/g) || [];
  for (var i = 0; i < px.length; i++) {
    if (Math.abs(parseFloat(px[i])) >= 30) return true;
  }
  var pct = t.match(/(-?\d+\.?\d*)%/g) || [];
  for (var j = 0; j < pct.length; j++) {
    if (Math.abs(parseFloat(pct[j])) >= 5) return true;
  }
  return false;
}
function isHiddenStart(s){
  // True if the element's inline style is parked at a 'before'
  // animation state. opacity:0 alone is ambiguous (could be a
  // crossfade companion); pair it with a slide transform OR an
  // explicit visibility:hidden (GSAP/SplitType signature) to be
  // confident it's a scroll-reveal waiting to fire.
  if (s.opacity !== '0' && s.visibility !== 'hidden') return false;
  if (s.visibility === 'hidden') return true;
  return hasSlideOffset(s.transform) || hasSlideOffset(s.translate);
}
function revealEl(el){
  var s = el.style;
  s.opacity = '1';
  if (s.visibility === 'hidden') s.visibility = 'visible';
  if (s.transform) s.transform = 'none';
  if (s.translate) s.translate = 'none';
  if (s.rotate)    s.rotate = 'none';
  if (s.scale)     s.scale = 'none';
  if (s.pointerEvents === 'none') s.pointerEvents = '';
}
function snapReveal(){
  // Safety net: any 'before-state' element still hidden gets
  // forced visible. Used as a deadline pass for non-CSR mode
  // (after GSAP/etc had a chance to play) and as a final guard.
  // Skip pinned-chain elements — same reason as findScrollAnchor.
  var n = 0;
  document.querySelectorAll('[style]').forEach(function(el){
    if (!isHiddenStart(el.style)) return;
    if (isInsideFixed(el)) return;
    revealEl(el); n++;
  });
  if (window.console && n) console.log('[offline-fix] snap-revealed', n);
}
function isInsideFixed(el){
  var p = el;
  while (p && p !== document.documentElement) {
    if (getComputedStyle(p).position === 'fixed') return true;
    p = p.parentElement;
  }
  return false;
}
function findScrollAnchor(el){
  // Pinned-narrative sections (one position:fixed ancestor wrapping
  // many sequenced headings the live JS reveals one-by-one across
  // scroll progress) can't be orchestrated offline — revealing all
  // of them at once produces an overlapping mess. Skip them: leave
  // the parked state intact, matching the live site at scroll=0.
  // For sticky chains, observe the sticky container itself (fires
  // when the user has scrolled past its stuck threshold).
  if (isInsideFixed(el)) return null;
  var p = el;
  while (p && p !== document.documentElement) {
    if (getComputedStyle(p).position === 'sticky') return p;
    p = p.parentElement;
  }
  return el;
}
function progressiveReveal(){
  // CSR mode: scripts stripped → no GSAP/IO is going to fire.
  // Mimic a scroll-driven reveal: each parked element gets a
  // CSS transition + IntersectionObserver. As it enters viewport
  // we transition to the 'after' state, with a small stagger by
  // document order so SplitType chars still feel letter-by-letter.
  var targets = [];
  document.querySelectorAll('[style]').forEach(function(el){
    if (isHiddenStart(el.style)) targets.push(el);
  });
  if (!targets.length) return;
  var EASE = 'cubic-bezier(.16,1,.3,1)';
  targets.forEach(function(el){
    el.style.transition =
      'opacity .6s ' + EASE + ', transform .6s ' + EASE + ', ' +
      'translate .6s ' + EASE + ', scale .6s ' + EASE + ', ' +
      'visibility 0s linear';
  });
  if (typeof IntersectionObserver === 'undefined') {
    targets.forEach(revealEl);
    return;
  }
  // Group targets by their scroll anchor. Anchors in sticky
  // sections share one observation point — when that anchor
  // intersects, we reveal all its parked descendants.
  // Targets with null anchor (inside position:fixed) are skipped.
  var groups = new Map();
  targets.forEach(function(el){
    var anchor = findScrollAnchor(el);
    if (!anchor) return;
    if (!groups.has(anchor)) groups.set(anchor, []);
    groups.get(anchor).push(el);
  });
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (!entry.isIntersecting) return;
      var children = groups.get(entry.target) || [entry.target];
      children.sort(function(a, b){
        var pos = a.compareDocumentPosition(b);
        return (pos & Node.DOCUMENT_POSITION_FOLLOWING) ? -1 : 1;
      });
      children.forEach(function(child, i){
        var delay = Math.min(i * 18, 700);
        setTimeout(function(){ revealEl(child); }, delay);
      });
      io.unobserve(entry.target);
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -8% 0px' });
  groups.forEach(function(_, anchor){ io.observe(anchor); });
  // Deadline guard: anything that never intersects still gets revealed.
  setTimeout(snapReveal, 8000);
}
function initUnicornStudio(){
  // Captured page already has the loaded UMD script + the inline
  // loader that says `if(!window.UnicornStudio)…`. The loader bails
  // because UnicornStudio is already defined, so init() never runs.
  if (window.UnicornStudio && typeof window.UnicornStudio.init === 'function'
      && !window.UnicornStudio.isInitialized) {
    try { window.UnicornStudio.init(); window.UnicornStudio.isInitialized = true; }
    catch(e){ if(window.console) console.warn('[offline-fix] UnicornStudio init failed:', e); }
  }
}
// Initial img sweep + observer for hydration-time updates
fixAll();
var obs = new MutationObserver(function(muts){
  for (var i = 0; i < muts.length; i++) {
    var m = muts[i];
    if (m.type === 'attributes' && m.target.tagName === 'IMG') fixImg(m.target);
    for (var j = 0; j < m.addedNodes.length; j++) {
      var n = m.addedNodes[j];
      if (n && n.nodeType === 1) {
        if (n.tagName === 'IMG') fixImg(n);
        if (n.querySelectorAll) n.querySelectorAll('img').forEach(fixImg);
      }
    }
  }
});
obs.observe(document, {childList:true, subtree:true,
  attributes:true, attributeFilter:['src','srcset']});
setTimeout(fixAll, 1000);
setTimeout(fixAll, 3000);
var go = function(){
  // CSR: scripts stripped, so 'before-state' elements stay parked
  // forever unless we do something. Use IntersectionObserver to
  // reveal them progressively as the user scrolls — preserves the
  // scroll-triggered animation feel for SplitType chars, etc.
  // Non-CSR: GSAP/Framer may still play; let them, then catch any
  // leftovers with a snap pass at 5 s.
  if (IS_CSR) progressiveReveal();
  else setTimeout(snapReveal, 5000);
  initUnicornStudio();
  setTimeout(initUnicornStudio, 500);
  setTimeout(initUnicornStudio, 2000);
};
if (document.readyState === 'complete') go();
else window.addEventListener('load', go);
})();
