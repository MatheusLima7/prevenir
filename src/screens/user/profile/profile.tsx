import useProfile from "./useProfile";
import useCamera from "./useCamera";
import UserProfile from "./userProfile";
import SupporterProfile from "./supporterProfile";

export default function Profile() {
  const {
    surname,
    gender,
    unit,
    triggers,
    registered,
    gender_answer,
    trigers_items,
    onPress,
    onLocalPress,
    edit_button,
    locals,
    labelCount,
    onDeletePress,
    delete_account,
    userType,
  } = useProfile();

  const { onEditAvatar, currentImage } = useCamera();

  if (userType == "user") {
    return (
      <UserProfile
        surname={surname}
        gender={gender}
        unit={unit}
        triggers={triggers}
        registered={registered}
        gender_answer={gender_answer}
        trigers_items={trigers_items}
        onPress={onPress}
        onLocalPress={onLocalPress}
        edit_button={edit_button}
        locals={locals}
        labelCount={labelCount}
        onDeletePress={onDeletePress}
        delete_account={delete_account}
        onEditAvatar={onEditAvatar}
        currentImage={currentImage}
      />
    );
  }

  return (
    <SupporterProfile
      surname={surname}
      gender={gender}
      unit={unit}
      triggers={triggers}
      registered={registered}
      gender_answer={"Feminino"}
      trigers_items={trigers_items}
      onPress={onPress}
      onLocalPress={onLocalPress}
      edit_button={edit_button}
      locals={locals}
      labelCount={labelCount}
      onDeletePress={onDeletePress}
      delete_account={delete_account}
      onEditAvatar={onEditAvatar}
      currentImage={currentImage}
    />
  );
}
